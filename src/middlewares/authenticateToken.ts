import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token){
    res.status(401).json({ message: "Token required" });
    return;
  }  

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err){
        res.status(403).json({ message: "Invalid token" });
        return;
    }
    req.user = user;
    next();
  });
};