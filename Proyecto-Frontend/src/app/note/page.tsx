import Layout from '@/modules/layout/layout'
import React from 'react'

export default function NotePage() {
  // Ejemplo de notas simuladas
  const notas = [
    {
      titulo: 'Resumen Álgebra Lineal',
      descripcion: 'Apuntes sobre matrices, determinantes y sistemas de ecuaciones.',
      autor: 'María López',
      fecha: '18 mayo 2025'
    },
    {
      titulo: 'Teoría de la Computación',
      descripcion: 'Notas sobre autómatas, gramáticas y lenguajes formales.',
      autor: 'Pedro Ramírez',
      fecha: '15 mayo 2025'
    },
    {
      titulo: 'Derecho Constitucional',
      descripcion: 'Resumen de los artículos principales y jurisprudencia relevante.',
      autor: 'Ana Torres',
      fecha: '10 mayo 2025'
    }
  ];

  return (
    <Layout>
      <section className="mt-12">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">Notas Compartidas</h1>
        <p className="mb-8 text-lg text-gray-700">Explora y descarga apuntes útiles de diferentes materias y cursos.</p>
        <ul className="space-y-4">
          {notas.map((nota, idx) => (
            <li key={idx} className="bg-white rounded-xl p-4 border border-amber-100 shadow flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-bold text-amber-700">{nota.titulo}</h4>
                <span className="text-sm text-gray-500">{nota.descripcion}</span>
              </div>
              <div className="text-sm text-gray-500 mt-2 md:mt-0">
                <span>Autor: {nota.autor}</span> | <span>Fecha: {nota.fecha}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
