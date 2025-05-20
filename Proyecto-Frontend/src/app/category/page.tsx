import React from 'react';
import Layout from '@/modules/layout/layout';
import Categorias from '@/modules/categorias/components/categorias';
import { categoriasData } from '@/modules/categorias/components/categoriasData';

export default function CategoriasPage() {
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoriasData.map(({imageSrc, title, description}, index) => (
          <Categorias 
            key={index} 
            imageSrc={imageSrc} 
            title={title} 
            description={description} 
          />
        ))}
      </section>
    </Layout>
  );
}
