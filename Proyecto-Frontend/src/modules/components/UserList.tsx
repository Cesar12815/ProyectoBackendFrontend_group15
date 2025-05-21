'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/stores/user.store';
import { useCategoryStore } from '@/stores/category.store';
import { categoriasData } from '@/modules/categorias/components/categoriasData';

// Mapeo de nombre de categoría a imagen
const CATEGORY_IMAGE_MAP: Record<string, string> = {};
(categoriasData as { title: string; imageSrc: string }[]).forEach((cat) => {
  CATEGORY_IMAGE_MAP[cat.title.toLowerCase()] = cat.imageSrc;
});

export default function UserList() {
  const { inventories, getInventories } = useUserStore();
  const { categories, getCategories } = useCategoryStore();

  useEffect(() => {
    getInventories();
    getCategories();
  }, []);

  if (!inventories || inventories.length === 0) {
    return (
      <div className="p-4 border rounded shadow-md bg-white">
        <h2 className="text-xl font-bold mb-4">👥 Usuarios</h2>
        <p>No hay usuarios para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="py-8 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-br from-orange-100 to-yellow-200 min-h-[60vh] rounded-xl">
      {inventories.map((user) => {
        const userCategory = categories.find(cat => cat.id === user.categoryId);
        const imageSrc = userCategory ? CATEGORY_IMAGE_MAP[userCategory.name.toLowerCase()] : '/estudiante.png';
        return (
          <div key={user.id} className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center gap-4 border-2 border-orange-300 hover:scale-105 transition-transform">
            <img src={imageSrc} alt="Categoría" className="w-24 h-24 rounded-full border-4 border-orange-400 shadow-lg" />
            <h3 className="text-xl font-bold text-orange-700">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            {userCategory && <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold mt-2">{userCategory.name}</span>}
          </div>
        );
      })}
    </div>
  );
}
