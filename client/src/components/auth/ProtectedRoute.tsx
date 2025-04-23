import { Navigate } from "react-router-dom";
import { JSX } from "react";
import { isTokenExpired } from "../../utils/auth";
function ProtectedRoute({children}: {children: JSX.Element}){
    const token = localStorage.getItem("token");
    if(!token || isTokenExpired(token)){
        return <Navigate to="/login" replace></Navigate>;
    }
    return children;
};

export default ProtectedRoute;