// axiosClient.ts o axiosClient.js
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Asegúrate que este sea el puerto donde corre el backend
  headers: {
    "Content-Type": "application/json"
  }
});
