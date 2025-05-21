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
        <div className="absolute top-4 right-4 flex items-center gap-3">
          <span className="text-sm text-gray-500">Bienvenido</span>
          <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
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