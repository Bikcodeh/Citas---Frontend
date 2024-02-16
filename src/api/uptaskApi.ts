import axios from "axios";

export const uptaskApi = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {}
});