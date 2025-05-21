import React from 'react';
import { Star } from 'lucide-react';

export default function Mensaje() {
  return (
    <div className="flex bg-gradient-to-br from-purple-100 to-purple-400 px-4 py-6 rounded-xl shadow-lg">
      <div className="px-3 flex items-center">
        <Star size={40} className="text-purple-700" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-purple-700 text-xl">
          ¡Empieza tu experiencia!
        </h3>
        <p className="text-gray-800 text-justify">
          Regístrate, comparte tus apuntes y accede a materiales de otros estudiantes. Únete a la comunidad y potencia tu aprendizaje colaborativo.
        </p>
      </div>
    </div>
  );
}
