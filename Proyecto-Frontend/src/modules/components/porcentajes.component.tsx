import React from 'react'

export default function Porcentaje() {
  return (
    <div className='flex flex-col'>
      <p className='text-black font-semibold '>Asistencias <span className='text-black font-normal mb-2'>%80</span></p>
      <div className='w-full p-1 rounded-full bg-neutral-600'>
        <div className='p-[5px] w-1/2 h-full rounded-full bg-gradient-to-br from-cyan-200 to-blue-400'></div>
      </div>
    </div>
  )
}
