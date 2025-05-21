import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Backend en 4000, frontend en 3002
  headers: {
    "Content-Type": "application/json"
  }
});
