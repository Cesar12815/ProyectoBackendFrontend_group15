import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

export interface Category {
  id: string;
  name: string;
  code?: string;
  createdAt?: string;
}

type CategoryStore = {
  categories: Category[];
  getCategories: () => Promise<void>;
  createCategory: (category: Partial<Category>) => Promise<void>;
  updateCategory: (id: string, category: Partial<Category>) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
};

export const useCategoryStore = create<CategoryStore>((set, get) => ({
  categories: [],
  getCategories: async () => {
    const { data } = await axiosClient.get<Category[]>("/category"); // Cambiado a plural
    set({ categories: data });
  },
  createCategory: async (category) => {
    await axiosClient.post("/categories", category); // Cambiado a plural
    await get().getCategories();
  },
  updateCategory: async (id, category) => {
    await axiosClient.put(`/categories/${id}`, category); // Cambiado a plural
    await get().getCategories();
  },
  deleteCategory: async (id) => {
    await axiosClient.delete(`/categories/${id}`); // Cambiado a plural
    await get().getCategories();
  },
}));
