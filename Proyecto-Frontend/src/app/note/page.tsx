import Layout from '@/modules/layout/layout'
import NoteList from '@/modules/components/NoteList'
import React from 'react'

export default function NotePage() {
  return (
    <Layout>
      <section className="mt-16 bg-gradient-to-br from-purple-100 via-blue-50 to-white rounded-xl shadow-lg p-10">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-4 drop-shadow-lg tracking-tight">
        📚 Notas Compartidas
      </h1>
      <p className="mb-10 text-xl text-gray-600 italic">
        Descubre, comparte y descarga apuntes útiles de todas tus materias favoritas.
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <NoteList />
      </div>
      </section>
    </Layout>
  );
}
