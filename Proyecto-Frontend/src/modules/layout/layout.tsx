"use client";

import React, { use } from "react";
import Aside from "../components/aside.component";
import { usePathname } from "next/navigation";
import { useLayout } from "../hooks/UseLayout";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  //console.log(pathname)
  const { title, routes } = useLayout(pathname);

  return (
    <main className="bg-lime-50 px-20 pt-[90px] pb-10 min-h-screen overflow-auto">
    <Aside />
    <div className="flex flex-row gap-10 py-20 no-scrollbar">
      
      {/* Contenido principal */}
      <section className="flex-1 flex flex-col px-10 py-8 bg-amber-100 rounded-lg relative">
        <header className="flex justify-between mb-5">
          <h1 className="text-black text-3xl font-bold">{title}</h1>
        </header>

        {children}
      </section>

      {/* Navegación lateral */}
      <nav className="min-w-[200px] h-fit px-6 py-4 bg-blue-100 rounded-xl border border-blue-200">
        <ul className="flex flex-col gap-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              className={`${
                pathname === route.path
                  ? "text-yellow-800"
                  : "text-black"
              } font-semibold capitalize hover:underline`}
              href={route.path}
            >
              {route.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  </main>
  );
}