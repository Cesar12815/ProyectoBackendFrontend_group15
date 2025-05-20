import Image from 'next/image'
import React from 'react'
import Info from '../profile/components/info'
import Title from '../profile/components/title'

export default function Aside() {
  return (
    <aside className="w-full h-[140px] px-8 py-5 bg-black fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Izquierda */}
        <div className="flex items-center gap-4">
          <Image src="/Logo-Apuntes.png" alt="Logo Corhuila" width={110} height={60} />
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-lg">Cesar David Quintero Ramirez</h1>
            <h1 className="text-white font-bold text-lg">Juan Diego Collazos Benavidez</h1>
            <span className="bg-amber-50 px-3 py-1 mt-2 rounded-lg w-fit text-black text-sm font-bold">
              Estudiantes De Ingenieria De Sistemas
            </span>
          </div>
        </div>

        {/* Centro - Título */}
        <div className="flex-1 flex justify-center">
          <Title />
        </div>

        {/* Derecha */}
        <div className="flex items-center gap-3">
          <Info />
        </div>
      </div>
    </aside>
  )
}
