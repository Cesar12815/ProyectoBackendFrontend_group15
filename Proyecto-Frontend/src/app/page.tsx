"use client";

import Layout from "@/modules/layout/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] py-12">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1 flex flex-col gap-6 items-start">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-2 drop-shadow-lg">NoteSwap</h1>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Intercambia, comparte y encuentra apuntes universitarios</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bienvenido a la plataforma donde los estudiantes colaboran y comparten conocimiento. Descubre apuntes de calidad, sube tus propios materiales y potencia tu aprendizaje en comunidad.
            </p>
            <ul className="space-y-3 text-base text-gray-800">
              <li className="flex items-center gap-2"><Image src="/libros.png" alt="Libros" width={32} height={32}/> Explora cientos de apuntes organizados por materia y carrera.</li>
              <li className="flex items-center gap-2"><Image src="/estudiante.png" alt="Estudiante" width={32} height={32}/> Sube tus propios apuntes y ayuda a otros estudiantes.</li>
              <li className="flex items-center gap-2"><Image src="/computacion.png" alt="Computación" width={32} height={32}/> Accede gratis y sin límites a todos los recursos.</li>
              <li className="flex items-center gap-2"><Image src="/logo-corhuila.png" alt="Corhuila" width={32} height={32}/> Comunidad exclusiva para estudiantes universitarios.</li>
            </ul>
            <a href="/archive" className="mt-6 inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg shadow transition">Explorar apuntes</a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src="/libro.png" alt="Apuntes" width={320} height={320} className="rounded-2xl shadow-2xl border-4 border-blue-200" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
