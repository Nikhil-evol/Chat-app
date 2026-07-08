import axios from "axios";

const backendUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api");

export const axiosInstance = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});