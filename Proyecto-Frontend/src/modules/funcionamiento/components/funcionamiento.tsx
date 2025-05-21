import React from 'react';
import { Compass, Download, FilePlus, User2 } from 'lucide-react';

export default function Funcionamiento() {
  const steps = [
    {
      icon: <Download size={28} className="text-green-600 bg-green-100 rounded-full p-1" />,
      title: 'Explora apuntes disponibles',
      description: 'Navega por una amplia variedad de apuntes y resúmenes subidos por otros estudiantes.',
    },
    {
      icon: <FilePlus size={28} className="text-green-600 bg-green-100 rounded-full p-1" />,
      title: 'Descarga o intercambia apuntes',
      description: 'Descarga los apuntes que necesites o comparte los tuyos para ayudar a la comunidad.',
    },
    {
      icon: <FilePlus size={28} className="text-green-600 bg-green-100 rounded-full p-1" />,
      title: 'Sube tus propios apuntes',
      description: 'Comparte tus apuntes fácilmente y gana reconocimiento entre tus compañeros.',
    },
    {
      icon: <User2 size={28} className="text-green-600 bg-green-100 rounded-full p-1" />,
      title: 'Crea tu perfil de estudiante',
      description: 'Personaliza tu perfil, gestiona tus apuntes y haz seguimiento de tus intercambios.',
    },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 shadow-lg">
          <Compass size={48} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-green-700 mt-2">¿Cómo funciona?</h2>
        <span className="text-green-500 font-medium text-sm">Sigue estos pasos sencillos</span>
      </div>
      <ol className="flex-1 flex flex-col gap-6">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-1">{`${idx + 1}. ${step.title}`}</h3>
              <p className="text-gray-700 text-base">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}