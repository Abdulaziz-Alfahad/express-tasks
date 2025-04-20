import prisma from "../prisma/prismaClient.js";
import { userSchema } from "../schemas/userSchema.js";
export const createUser = async (user: userSchema) =>{
    const createdUser = await prisma.user.create({
        data: user
    })
    return (createdUser);
}