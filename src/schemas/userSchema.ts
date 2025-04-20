import { z } from "zod";
// model User {
//     id               Int          @id @default(autoincrement())
//     username         String       @unique
//     password         String
//     email            String       @unique
//     firstName        String       
//     lastName         String?
//     createdAt        DateTime     @default(now())
//     tasks            Task[]
//   }
export const userSchema = z.object({
    username: z.string({
        required_error: "username is required",
        invalid_type_error: "username must be a string"
    }),
    password: z.string({required_error:"password is required"})
    .min(8,{message: "Password must be longer than 8 characters"})
    .max(255,{message:"password must be shorter than 255 characters"}),
    email: z.string({required_error:"Email is requires"})
    .email({message:"Email must be a valid email"}),
    firstName: z.string({required_error: "firstname is required"})
})

export const userLoginSchema = z.object({
    username: z.string(),
    password: z.string()
})

export type userSchema = z.infer<typeof userSchema>
export type userLoginSchema = z.infer<typeof userLoginSchema>