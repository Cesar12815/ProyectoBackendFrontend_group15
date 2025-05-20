import Image from 'next/image'
import React from 'react'

interface ArticuloProps {
  nombre: string
  descripcion: string
  categoria: string
  fecha: string
  imagen: string
}

export default function Articulo({ nombre, descripcion, categoria, fecha, imagen }: ArticuloProps) {
  return (
    <article className="rounded-xl flex flex-col gap-2 group bg-gray-100 hover:cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <Image
          width={500}
          height={500}
          src={imagen}
          alt={nombre}
          className="object-cover rounded-xl group-hover:scale-110 w-full max-h-60 transition-transform"
        />
      </div>
      <div className="flex flex-col gap-3 px-4 py-5">
        <p className="text-black">{categoria} - {fecha}</p>
        <h3 className="text-xl text-black font-bold">{nombre}</h3>
        <p className="text-black">{descripcion}</p>
      </div>
    </article>
  )
}
