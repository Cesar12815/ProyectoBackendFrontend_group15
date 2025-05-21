import React from 'react';
import { Lightbulb } from 'lucide-react';


export default function Objetivo() {
    return (
        <div className='flex bg-gradient-to-br from-blue-100 to-blue-400 px-4 py-8 rounded-xl shadow-lg'>
            <div className='px-3 flex items-center'>
                <Lightbulb size={40} className='text-blue-700' />
            </div>
            
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-blue-700 text-xl'>
                    Misión del sitio
                </h3>
                <p className="text-gray-800 text-justify">
                         Nuestro objetivo es facilitar el intercambio de apuntes entre estudiantes, promoviendo la colaboración académica y el acceso igualitario a recursos de estudio. Queremos construir una comunidad donde compartir conocimientos sea sencillo, seguro y beneficioso para todos.
                </p>
            </div>
        </div>
    );
}
