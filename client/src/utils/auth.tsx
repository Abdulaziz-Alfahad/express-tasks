import { jwtDecode } from "jwt-decode";

interface JwtPayload{
    exp: number,
    [key: string]: any
}

export function isTokenExpired(token: string): boolean{
    const decoded: JwtPayload = jwtDecode(token);
    const currentTime: number = Math.floor(Date.now()/1000);
    return decoded.exp < currentTime;
}

export function handleExpiredToken() {
    localStorage.removeItem("token");
    // window.location.href = "/login";
}
