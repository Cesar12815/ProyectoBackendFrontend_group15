import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

export interface Note {
  id: string;
  title: string;
  content: string;
  fileUrl: string;
  courseId: string;
  authorId: string;
  createdAt?: string;
  updatedAt?: string;
}

type NoteStore = {
  notes: Note[];
  getNotes: () => Promise<void>;
  createNote: (note: Partial<Note>) => Promise<void>;
  updateNote: (id: string, note: Partial<Note>) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
};

export const useNoteStore = create<NoteStore>((set, get) => ({
  notes: [],
  getNotes: async () => {
    const { data } = await axiosClient.get<Note[]>("/note"); // Cambiado a plural
    set({ notes: data });
  },
  createNote: async (note) => {
    await axiosClient.post("/notes", note); // Cambiado a plural
    await get().getNotes();
  },
  updateNote: async (id, note) => {
    await axiosClient.put(`/notes/${id}`, note); // Cambiado a plural
    await get().getNotes();
  },
  deleteNote: async (id) => {
    await axiosClient.delete(`/notes/${id}`); // Cambiado a plural
    await get().getNotes();
  },
}));
