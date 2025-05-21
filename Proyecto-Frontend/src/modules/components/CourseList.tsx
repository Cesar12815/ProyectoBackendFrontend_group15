"use client";
import { useEffect, useState } from "react";
import { useCourseStore, Course } from "@/stores/course.store";

export default function CourseList() {
  const { courses, getCourses, createCourse, updateCourse, deleteCourse } = useCourseStore();
  const [form, setForm] = useState<Partial<Course>>({ name: "", code: "", categoryId: "" });
  const [selected, setSelected] = useState<Course | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => { getCourses(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) {
      await updateCourse(selected.id, form);
      setMessage("Curso actualizado");
    } else {
      await createCourse(form);
      setMessage("Curso creado");
    }
    setForm({ name: "", code: "", categoryId: "" });
    setSelected(null);
    getCourses();
  };

  const handleEdit = (course: Course) => {
    setSelected(course);
    setForm({ name: course.name, code: course.code, categoryId: course.categoryId });
  };

  const handleDelete = async (id: string) => {
    await deleteCourse(id);
    setMessage("Curso eliminado");
    getCourses();
  };

  return (
    <div className="p-6 border rounded shadow-md bg-white mb-6">
      <h2 className="text-2xl font-bold mb-4">📖 Cursos</h2>
      {message && <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">{message}</div>}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 bg-gray-50 p-4 rounded shadow">
        <input className="border p-2 rounded" placeholder="Nombre" value={form.name || ""} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
        <input className="border p-2 rounded" placeholder="Código" value={form.code || ""} onChange={e => setForm(f => ({ ...f, code: e.target.value }))} />
        <input className="border p-2 rounded" placeholder="ID Categoría" value={form.categoryId || ""} onChange={e => setForm(f => ({ ...f, categoryId: e.target.value }))} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">{selected ? "Actualizar" : "Crear"} Curso</button>
        {selected && <button type="button" onClick={() => { setSelected(null); setForm({ name: "", code: "", categoryId: "" }); }} className="text-sm text-gray-500 underline mt-1">Cancelar edición</button>}
      </form>
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course.id} className="p-4 border rounded flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-gray-50 shadow">
            <div>
              <p><strong>Nombre:</strong> {course.name}</p>
              <p><strong>Código:</strong> {course.code}</p>
              <p><strong>ID Categoría:</strong> {course.categoryId}</p>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button onClick={() => handleEdit(course)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Editar</button>
              <button onClick={() => handleDelete(course.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
