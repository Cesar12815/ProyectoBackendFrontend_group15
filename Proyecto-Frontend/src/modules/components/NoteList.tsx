"use client";
import { useEffect, useState } from "react";
import { useNoteStore, Note } from "@/stores/note.store";
import { useCourseStore } from '@/stores/course.store';
import { useUserStore } from '@/stores/user.store';

export default function NoteList() {
  const { notes, getNotes, createNote, updateNote, deleteNote } = useNoteStore();
  const { courses, getCourses } = useCourseStore();
  const { inventories: users, getInventories } = useUserStore();
  const [form, setForm] = useState<Partial<Note>>({ title: "", content: "", fileUrl: "", courseId: "", authorId: "" });
  const [selected, setSelected] = useState<Note | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => { getNotes(); getCourses(); getInventories(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) {
      await updateNote(selected.id, form);
      setMessage("Nota actualizada");
    } else {
      await createNote(form);
      setMessage("Nota creada");
    }
    setForm({ title: "", content: "", fileUrl: "", courseId: "", authorId: "" });
    setSelected(null);
    getNotes();
  };

  const handleEdit = (note: Note) => {
    setSelected(note);
    setForm({ title: note.title, content: note.content, fileUrl: note.fileUrl, courseId: note.courseId, authorId: note.authorId });
  };

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    setMessage("Nota eliminada");
    getNotes();
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white mb-6">
      <h2 className="text-2xl font-bold mb-4">📝 Notas</h2>
      {message && <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">{message}</div>}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 bg-gray-50 p-4 rounded shadow">
        <input className="border p-2 rounded" placeholder="Título" value={form.title || ""} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
        <textarea className="border p-2 rounded" placeholder="Contenido" value={form.content || ""} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} required />
        <input className="border p-2 rounded" placeholder="URL del archivo" value={form.fileUrl || ""} onChange={e => setForm(f => ({ ...f, fileUrl: e.target.value }))} />
        <select className="border p-2 rounded" value={form.courseId || ""} onChange={e => setForm(f => ({ ...f, courseId: e.target.value }))} required>
          <option value="">Selecciona un curso</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
        <select className="border p-2 rounded" value={form.authorId || ""} onChange={e => setForm(f => ({ ...f, authorId: e.target.value }))} required>
          <option value="">Selecciona un autor</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">{selected ? "Actualizar" : "Crear"} Nota</button>
        {selected && <button type="button" onClick={() => { setSelected(null); setForm({ title: "", content: "", fileUrl: "", courseId: "", authorId: "" }); }} className="text-sm text-gray-500 underline mt-1">Cancelar edición</button>}
      </form>
      <ul className="space-y-4">
        {notes.map(note => (
          <li key={note.id} className="p-4 border rounded flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-gray-50 shadow">
            <div>
              <p><strong>Título:</strong> {note.title}</p>
              <p><strong>Contenido:</strong> {note.content}</p>
              <p><strong>Archivo:</strong> {note.fileUrl ? <a href={note.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Abrir archivo</a> : 'No disponible'}</p>
              <p><strong>ID Curso:</strong> {note.courseId}</p>
              <p><strong>ID Autor:</strong> {note.authorId}</p>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button onClick={() => handleEdit(note)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Editar</button>
              <button onClick={() => handleDelete(note.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
