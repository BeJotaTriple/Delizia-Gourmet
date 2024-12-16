import axios from 'axios';

// Configuración de axios
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;