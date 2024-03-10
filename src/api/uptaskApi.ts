import axios from "axios";

const uptaskApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {}
});

uptaskApi.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default uptaskApi;