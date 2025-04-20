import prisma from "../prisma/prismaClient.js";
import { userLoginSchema, userSchema } from "../schemas/userSchema.js";
export const createUser = async (user: userSchema) =>{
    const createdUser = await prisma.user.create({
        data: user
    })
    return (createdUser);
}
export const findUser = async(user: userLoginSchema)=>{
    const foundUser = await prisma.user.findUnique(
        {
            where: {username: user.username}
        }
    )
    return foundUser;
}

export const validateUser = async(user: userLoginSchema): Promise <boolean>=>{
    const foundUser = await prisma.user.findUnique(
        {
            where: {username: user.username}
        }
    )
    if (!foundUser) return false;
    console.log(`${foundUser.password} is being matched to ${user.password} resulting in ${foundUser.password === user.password}`)
    return foundUser.password === user.password;
}