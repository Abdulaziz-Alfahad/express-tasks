import { JSX } from "react";
import { isTokenExpired } from "../../utils/auth";
import { Navigate } from "react-router-dom";
function GuestRoute({children} : {children: JSX.Element}){
    const token = localStorage.getItem("token");
    if(!token || isTokenExpired(token)) return children;
    return <Navigate to={'/dashboard'} replace></Navigate>;;
};
export default GuestRoute;