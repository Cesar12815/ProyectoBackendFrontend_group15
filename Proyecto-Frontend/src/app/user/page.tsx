import Layout from '@/modules/layout/layout'
import React from 'react'

export default function User() {
  return (
    <Layout>
      {/* Información del usuario */}
      <section className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white rounded-xl shadow p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-orange-700 mb-4 text-center">Perfil del Estudiante</h1>
          <div className="flex flex-col items-center gap-2">
            <img src="/estudiante.png" alt="Foto de perfil" className="w-24 h-24 rounded-full border-2 border-orange-400 mb-2" />
            <span className="text-lg font-semibold">Nombre: Juan Pérez</span>
            <span className="text-gray-600">Correo: juan.perez@universidad.edu</span>
            <span className="text-gray-600">Carrera: Ingeniería de Sistemas</span>
            <span className="text-gray-600">Semestre: 5°</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}
