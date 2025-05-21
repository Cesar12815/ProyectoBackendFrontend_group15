"use client";
import Layout from '@/modules/layout/layout'
import React, { useMemo } from 'react'
import UserList from '@/modules/components/UserList'
import { useCategoryStore } from '@/stores/category.store'
import { categoriasData } from '@/modules/categorias/components/categoriasData'

const CATEGORY_IMAGE_MAP: Record<string, string> = {};
(categoriasData as { title: string; imageSrc: string }[]).forEach((cat) => {
  CATEGORY_IMAGE_MAP[cat.title.toLowerCase()] = cat.imageSrc;
});

export default function User() {
  const { categories } = useCategoryStore();
  // Simulación: Asume que el usuario pertenece a "Tecnología e Ingeniería"
  const userCategory = categories.find(cat => cat.name.toLowerCase().includes('tecnología'));
  const imageSrc = userCategory ? CATEGORY_IMAGE_MAP[userCategory.name.toLowerCase()] : '/estudiante.png';

  return (
    <Layout>
      {/* Información del usuario */}
      <section className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white rounded-xl shadow p-8 w-full max-w-md mb-8">
          <h1 className="text-2xl font-bold text-orange-700 mb-4 text-center">Perfil del Estudiante</h1>
          <div className="flex flex-col items-center gap-2">
            <img src={imageSrc} alt="Foto de perfil" className="w-24 h-24 rounded-full border-2 border-orange-400 mb-2" />
            <span className="text-xl font-bold text-purple-800 mb-1">👤 Juan Pérez</span>
            <span className="text-gray-600">Correo: juan.perez@universidad.edu</span>
            <span className="text-gray-600">Carrera: Ingeniería de Sistemas</span>
            <span className="text-gray-600">Semestre: 5°</span>
            {userCategory && <span className="text-blue-700 font-semibold">Categoría: {userCategory.name}</span>}
          </div>
        </div>
        <UserList />
      </section>
    </Layout>
  )
}
