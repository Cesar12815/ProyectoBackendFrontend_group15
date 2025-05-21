import React from 'react';
import Layout from '@/modules/layout/layout';
import Categorias from '@/modules/categorias/components/categorias';
import { categoriasData } from '@/modules/categorias/components/categoriasData';
import CategoryList from '@/modules/components/CategoryList';

export default function CategoriasPage() {
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoriasData.map(({ imageSrc, title, description }, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-gray-200"
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-200 shadow"
            />
            <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center justify-center min-h-[60vh]">
        <CategoryList />
      </section>
    </Layout>
  );
}
