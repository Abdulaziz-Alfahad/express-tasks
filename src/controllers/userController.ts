import { Request, Response } from 'express';
import * as userService from '../services/userService.js';
import { userSchema, userLoginSchema } from '../schemas/userSchema.js';
import { generateToken } from '../utils/auth.js';
export const createUser = async (req: Request, res: Response) =>{
    try{
        const validatedData = userSchema.parse(req.body);
        const createdUser = await userService.createUser(validatedData);
        const token = generateToken(createdUser.id, createdUser.email, createdUser.username);
        console.log(`User created ${JSON.stringify(createdUser, null, 2)}`)
        res.json({"success": `User ${createdUser.username} is created successfully`});
        return
    }catch(err){
        if (err) res.json(err);
        else res.status(500).send("internal server error");
    }
}

export const userLogin = async (req: Request, res: Response) =>{
    try{
        const validatedData = userLoginSchema.parse(req.body);
        const user = await userService.findUser(validatedData);
        if (!user){
            res.status(401).json({ message: "Invalid credentials" });
            return
        } 
        const validateUser = await userService.validateUser(validatedData);
        if (!validateUser){
            res.status(401).json({ message: "Invalid credentials" });
            return;
        } 
        const token = generateToken(user.id, user.email, user.username);
        res.json({ token });
        return
    }catch(err){
        if(err) res.json(err);
        else res.status(500).send("internal server error");
    }
}