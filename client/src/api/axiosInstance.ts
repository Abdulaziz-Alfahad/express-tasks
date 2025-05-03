import axios from "axios";
import { deleteToken, isTokenExpired } from "../utils/auth";
const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: false
})

axiosInstance.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem("token");
        if(token){
            if(isTokenExpired(token)){
                deleteToken();
                throw new Error("Token expired");
            }
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
)

export default axiosInstance