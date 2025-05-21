import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

export interface Course {
  id: string;
  name: string;
  code: string;
  categoryId: string;
  createdAt?: string;
}

type CourseStore = {
  courses: Course[];
  getCourses: () => Promise<void>;
  createCourse: (course: Partial<Course>) => Promise<void>;
  updateCourse: (id: string, course: Partial<Course>) => Promise<void>;
  deleteCourse: (id: string) => Promise<void>;
};

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  getCourses: async () => {
    const { data } = await axiosClient.get<Course[]>("/course"); // Regresa a singular
    set({ courses: data });
  },
  createCourse: async (course) => {
    await axiosClient.post("/course", course); // Regresa a singular
    await get().getCourses();
  },
  updateCourse: async (id, course) => {
    await axiosClient.put(`/course/${id}`, course); // Regresa a singular
    await get().getCourses();
  },
  deleteCourse: async (id) => {
    await axiosClient.delete(`/course/${id}`); // Regresa a singular
    await get().getCourses();
  },
}));
