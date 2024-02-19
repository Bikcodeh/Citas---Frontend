import axios from "axios";

export const uptaskApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {}
});