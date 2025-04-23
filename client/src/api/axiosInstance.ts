import axios from "axios";
import { handleExpiredToken, isTokenExpired } from "../utils/auth";
const axiosInstance = axios.create({
    baseURL: "https://localhost:5000",
    withCredentials: false
})

axiosInstance.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem("token");
        if(token){
            if(isTokenExpired(token)){
                handleExpiredToken();
                throw new Error("Token expired");
            }
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
)

export default axiosInstance