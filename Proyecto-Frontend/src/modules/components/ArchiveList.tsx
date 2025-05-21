'use client';

import { useState, useEffect } from 'react';
import { useArchiveStore, Archive } from '@/stores/archive.store';
import { useUserStore } from '@/stores/user.store';

export default function ArchiveList() {
  const { inventories, getInventories, createArchive, updateArchive, deleteArchive } = useArchiveStore();
  const { inventories: users, getInventories: getUsers } = useUserStore();
  const [selected, setSelected] = useState<Archive | null>(null);
  const [form, setForm] = useState<{ userId: string; noteId: string; isStarred: boolean }>({ userId: '', noteId: '', isStarred: false });
  const [message, setMessage] = useState('');

  // Recargar lista al montar y tras cada acción
  const reload = async () => {
    await getInventories();
    setSelected(null);
    setForm({ userId: '', noteId: '', isStarred: false });
  };

  // Crear o actualizar
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected) {
      await updateArchive(selected.id, form);
      setMessage('Archivo actualizado');
    } else {
      await createArchive(form);
      setMessage('Archivo creado');
    }
    reload();
  };

  // Eliminar
  const handleDelete = async (id: string) => {
    await deleteArchive(id);
    setMessage('Archivo eliminado');
    reload();
  };

  // Seleccionar para editar
  const handleEdit = (archive: Archive) => {
    setSelected(archive);
    setForm({
      userId: archive.userId,
      noteId: archive.noteId,
      isStarred: archive.isStarred,
    });
  };

  useEffect(() => {
    getInventories();
    getUsers();
  }, []);

  return (
    <div className="py-8 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-br from-gray-900 to-gray-700 min-h-[60vh] rounded-xl">
      {inventories.length === 0 && (
        <div className="col-span-full text-center text-white text-lg">No hay archivos para mostrar.</div>
      )}
      {inventories.map((archive) => (
        <div key={archive.id} className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-3 border-2 border-yellow-400 hover:scale-105 transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">ID: {archive.id.slice(0, 8)}...</span>
            {archive.isStarred && <span className="ml-2 text-yellow-300 font-bold">★ Destacado</span>}
          </div>
          <div className="flex flex-col gap-1 text-white">
            <span><strong>Usuario:</strong> {archive.userId}</span>
            <span><strong>Nota:</strong> {archive.noteId}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={() => handleEdit(archive)} className="bg-yellow-400 text-gray-900 px-4 py-1 rounded hover:bg-yellow-300 font-bold">Editar</button>
            <button onClick={() => handleDelete(archive.id)} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 font-bold">Eliminar</button>
          </div>
        </div>
      ))}
      <div className="col-span-full mt-8">
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-6 flex flex-col gap-4 shadow-xl border border-yellow-400 max-w-lg mx-auto">
          <h3 className="text-yellow-400 text-xl font-bold mb-2">{selected ? 'Editar Archivo' : 'Nuevo Archivo'}</h3>
          <select className="border p-2 rounded" value={form.userId} onChange={e => setForm(f => ({ ...f, userId: e.target.value }))} required>
            <option value="">Selecciona un usuario</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <input className="border p-2 rounded" placeholder="ID de Nota" value={form.noteId} onChange={e => setForm(f => ({ ...f, noteId: e.target.value }))} required />
          <label className="flex items-center gap-2 text-white">
            <input type="checkbox" checked={form.isStarred} onChange={e => setForm(f => ({ ...f, isStarred: e.target.checked }))} />
            Destacado
          </label>
          <button type="submit" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 font-bold">{selected ? 'Actualizar' : 'Crear'}</button>
          {message && <div className="mt-2 p-2 bg-green-200 text-green-900 rounded text-center">{message}</div>}
        </form>
      </div>
    </div>
  );
}
