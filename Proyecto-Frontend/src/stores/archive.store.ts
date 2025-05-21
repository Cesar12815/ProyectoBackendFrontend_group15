import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

// Interfaz actualizada para reflejar la respuesta real del backend
export interface Archive {
  id: string;
  userId: string;
  noteId: string;
  viewedAt: Date;
  isStarred: boolean;
  user?: {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
  };
  note?: {
    id: string;
    title: string;
    content: string;
    fileUrl: string;
    courseId: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
  };
}

type ArchiveStore = {
  inventories: Archive[];
  getInventories: () => Promise<void>;
  createArchive: (archive: Partial<Archive>) => Promise<void>;
  updateArchive: (id: string, archive: Partial<Archive>) => Promise<void>;
  deleteArchive: (id: string) => Promise<void>;
};


export const useArchiveStore = create<ArchiveStore>((set, get) => ({
  inventories: [],
  getInventories: async () => {
    try {
      const { data } = await axiosClient.get<Archive[]>("/archive"); // Regresa a singular
      set({ inventories: data });
    } catch (error) {
      console.error("Error fetching archives:", error);
    }
  },
  createArchive: async (archive) => {
    await axiosClient.post("/archive", archive); // Regresa a singular
    await get().getInventories();
  },
  updateArchive: async (id, archive) => {
    await axiosClient.put(`/archive/${id}`, archive); // Regresa a singular
    await get().getInventories();
  },
  deleteArchive: async (id) => {
    await axiosClient.delete(`/archive/${id}`); // Regresa a singular
    await get().getInventories();
  },
}));
