"use client"

import Layout from "@/modules/layout/layout";
import Objetivo from "@/modules/objetivo/components/objetivo";
import Funcionamiento from '../modules/funcionamiento/components/funcionamiento';
import Mensaje from "@/modules/mensaje/components/mensaje";

export default function Home() {

  return (
    <Layout>
      <section className="text-black">
        <h1 className="text-justify">
      Bienvenido a la plataforma de intercambio de apuntes entre estudiantes. Aquí podrás compartir, buscar y descargar apuntes de distintas materias, facilitando el aprendizaje colaborativo y el acceso a recursos útiles. Sube tus propios apuntes, ayuda a otros y enriquece tu experiencia académica formando parte de una comunidad activa y solidaria.
        </h1>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="flex flex-col gap-3">
            <Objetivo />
            <Mensaje /> 
          </div>
          <Funcionamiento />
        </div>
      </section>

    </Layout>
  );
}
