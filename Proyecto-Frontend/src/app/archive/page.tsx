// src/app/archive/page.tsx
"use client"; // IMPORTANTE: para que use hooks y estado en app router

import React, { useEffect } from "react";
import Layout from "@/modules/layout/layout";
import ArchiveList from "@/modules/components/ArchiveList";
import { useArchiveStore } from "@/stores/archive.store";

export default function Archive() {
  const { getInventories } = useArchiveStore();

  useEffect(() => {
    getInventories(); // Cargar datos del backend cuando el componente se monta
  }, []);

  return (
    <Layout>
      <h1>Archivos</h1>
      <div className="main-container">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <ArchiveList />
        </section>
      </div>
    </Layout>
  );
}