"use client";
import { useEffect, useState } from "react";
import { useCategoryStore, Category } from "@/stores/category.store";

export default function CategoryList() {
  const { categories, getCategories, createCategory, updateCategory, deleteCategory } = useCategoryStore();
  const [form, setForm] = useState<Partial<Category>>({ name: "", code: "" });
  const [selected, setSelected] = useState<Category | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getCategories().catch((err) => {
      setError("No se pudo cargar las categorías. Verifica la conexión con el backend.");
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (!form.name) {
        setError("El nombre es obligatorio");
        return;
      }
      if (selected) {
        await updateCategory(selected.id, form);
        setMessage("Categoría actualizada");
      } else {
        await createCategory(form);
        setMessage("Categoría creada");
      }
      setForm({ name: "", code: "" });
      setSelected(null);
      getCategories();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Error al actualizar la categoría");
    }
  };

  const handleEdit = (cat: Category) => {
    setSelected(cat);
    setForm({ name: cat.name, code: cat.code });
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    setMessage("Categoría eliminada");
    getCategories();
  };

  return (
    <div className="py-8 px-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-gradient-to-br from-blue-100 to-blue-300 min-h-[40vh] rounded-xl">
      {categories.map(cat => (
        <div key={cat.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center border-2 border-blue-400 hover:bg-blue-50 transition">
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-2">{cat.code || 'Sin código'}</span>
          <h3 className="text-lg font-bold text-blue-700 mb-1">{cat.name}</h3>
        </div>
      ))}
    </div>
  );
}
