import jwt from "jsonwebtoken";

export const generateToken = (id: number,email: string, username: string)=>{
    return jwt.sign(
                { id: id, email: email, name: username },
                process.env.JWT_SECRET!,
                { expiresIn: "1h" }
            );
}