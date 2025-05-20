"use client";  // IMPORTANTE: para que use hooks y estado en app router

import React, { useEffect } from "react";
import Layout from "@/modules/layout/layout";
import Articulo from "@/modules/components/articulo.component";
import { useArchiveStore } from "@/stores/archive.store";

export default function Archive() {
  const { inventories, getInventories } = useArchiveStore();

  useEffect(() => {
    getInventories();  // Cargar datos del backend cuando el componente se monta
  }, []);

  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {inventories.length === 0 && <p>Cargando archivos...</p>}

        {inventories.map((item) => (
          <Articulo
            key={item.id}
            nombre={item.product}   // Aquí podrías querer mapear para mostrar nombre real del producto
            descripcion={`Cantidad: ${item.quantity} - Artesano: ${item.artisan}`}
            categoria="Inventario"
            fecha={item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}
            imagen="/inventario.jpg" // O cambia a imagen real si la tienes
          />
        ))}
      </section>
    </Layout>
  );
}
