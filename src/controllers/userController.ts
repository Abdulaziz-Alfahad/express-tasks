import { Request, Response } from 'express';
import * as userService from '../services/userService.js';
import { userSchema } from '../schemas/userSchema.js';
export const createUser = async (req: Request, res: Response) =>{
    try{
        const validatedData = userSchema.parse(req.body);
        const createdUser = await userService.createUser(validatedData);
        console.log(`User created ${JSON.stringify(createdUser, null, 2)}`)
        res.json({"success": `User ${createdUser.username} is created successfully`});
        return
    }catch(err){
        if (err) res.json(err);
        else res.status(500).send("internal server error");
    }
}
