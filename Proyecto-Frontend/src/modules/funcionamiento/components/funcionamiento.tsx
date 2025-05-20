import React from 'react'
import { BookOpen } from 'lucide-react';

export default function Funcionamiento() {
  return (
    <div className='flex bg-gradient-to-br from-amber-50 to-[#46c6a4] px-4 py-8 rounded-xl shadow-lg'>
      <div className='px-3 flex items-center'>
        <BookOpen size={40} className='text-white' />
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className='font-semibold text-red-500 text-xl'>
          ¿Cómo funciona?
        </h3>

        <p className="text-black">
          <strong>1. Explora apuntes disponibles</strong><br/>
          Navega por una amplia variedad de apuntes y resúmenes subidos por otros estudiantes.
        </p>
        <p className="text-black">
          <strong>2. Descarga o intercambia apuntes</strong><br/>
          Descarga los apuntes que necesites o comparte los tuyos para ayudar a la comunidad.
        </p>
        <p className="text-black">
          <strong>3. Sube tus propios apuntes</strong><br/>
          Comparte tus apuntes fácilmente y gana reconocimiento entre tus compañeros.
        </p>
        <p className="text-black">
          <strong>4. Crea tu perfil de estudiante</strong><br/>
          Personaliza tu perfil, gestiona tus apuntes y haz seguimiento de tus intercambios.
        </p>
      </div>
    </div>
  )
}