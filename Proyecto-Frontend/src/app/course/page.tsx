import Layout from '@/modules/layout/layout';
import CourseList from '@/modules/components/CourseList';
import React from 'react';

export default function Course() {
  // Aquí se simulan algunos cursos y apuntes para mostrar en la interfaz
  const cursos = [
    { nombre: 'Matemáticas', descripcion: 'Apuntes de álgebra, cálculo y más.' },
    { nombre: 'Programación', descripcion: 'Apuntes de Java, Python, C++.' },
    { nombre: 'Derecho', descripcion: 'Apuntes de derecho civil y penal.' },
  ];

  const apuntes = [
    { titulo: 'Álgebra Básica', curso: 'Matemáticas', autor: 'Juan Pérez', fecha: '2025-05-10' },
    { titulo: 'Introducción a Python', curso: 'Programación', autor: 'Ana Gómez', fecha: '2025-05-12' },
    { titulo: 'Derecho Penal I', curso: 'Derecho', autor: 'Carlos Ruiz', fecha: '2025-05-15' },
  ];

  return (
    <Layout>
      <section className="mt-12">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">Intercambio de Apuntes</h1>
        <p className="mb-8 text-lg text-gray-700">Explora cursos y comparte tus apuntes con otros estudiantes.</p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">Cursos Disponibles</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cursos.map((curso, idx) => (
                <li key={idx} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 shadow-lg border border-blue-200 hover:scale-105 transition-transform duration-200">
                <h3 className="text-2xl font-extrabold text-purple-700 mb-2">{curso.nombre}</h3>
                <p className="text-gray-700 italic">{curso.descripcion}</p>
                </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Apuntes Recientes</h2>
          <ul className="space-y-4">
            {apuntes.map((apunte, idx) => (
              <li key={idx} className="bg-white rounded-xl p-4 border border-amber-100 shadow flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-lg font-bold text-amber-700">{apunte.titulo}</h4>
                  <span className="text-sm text-gray-500">Curso: {apunte.curso}</span>
                </div>
                <div className="text-sm text-gray-500 mt-2 md:mt-0">
                  <span>Autor: {apunte.autor}</span> | <span>Fecha: {apunte.fecha}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-[60vh]">
        <CourseList />
      </section>
    </Layout>
  );
}
