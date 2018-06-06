import axios from 'axios';

const api  = axios.create({
    baseURL: 'http://localhost:8080'
});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("jwt");
    //config.headers.Authorization = `${token}`;
    return config;
})

export default api;
