import axios from "axios";

// Base URL comes from the env file for each mode (.env.development / .env.production).
// If none is set, it falls back to the local CRM backend on this machine's LAN IP.
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://192.168.29.89:5001/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

// Normalise every failure into { status, message } so components never parse axios errors.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status ?? 0;
    const message =
      error.response?.data?.message ||
      (error.code === "ECONNABORTED" ? "The server took too long to respond." : null) ||
      (status === 0 ? "Unable to reach the server. Please check your connection." : null) ||
      "Something went wrong. Please try again.";
    return Promise.reject({ status, message, original: error });
  },
);

export default api;
