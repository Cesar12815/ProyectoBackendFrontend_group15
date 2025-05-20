// src/stores/inventory.store.ts
import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";
import Archive from '../app/archive/page';


interface User {
  id     :   String  
  userId  :  String
  noteId   : String
  viewedAt : Date 
  isStarred : Boolean
}

type UserStore = {
  inventories: User[];
  getInventories: () => void;
};

export const useArchiveStore = create<UserStore>((set) => ({
  inventories: [],
  getInventories: async () => {
    console.log("Base URL axiosClient:", axiosClient.defaults.baseURL); // 👈 Agregado
    try {
      const { data } = await axiosClient.get<User[]>("/archive");
      console.log("Datos recibidos:", data); // 👈 Opcional para confirmar que la respuesta llega
      set({ inventories: data });
    } catch (error) {
      console.error("Error fetching archives:", error);
    }
  },
}));
