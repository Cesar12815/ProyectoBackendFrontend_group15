import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";


interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  notes: any[];
  archives: any[];
  categoryId?: string; // Relación con categoría
}

type UserStore = {
  inventories: User[];
  getInventories: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  inventories: [],
  getInventories: async () => {
    console.log("Base URL axiosClient:", axiosClient.defaults.baseURL); // 👈 Agregado
    try {
      const { data } = await axiosClient.get<User[]>("/user"); // Regresa a singular
      console.log("Datos recibidos:", data); // 👈 Opcional para confirmar que la respuesta llega
      set({ inventories: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
}));
