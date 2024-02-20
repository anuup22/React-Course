import  * as z  from "zod"

//to validate the input of the user
export const SignupValidation = z.object({
    name: z.string().min(2, { message: "Name is too short" }), 
    username: z.string().min(2, { message: "Username is too short" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password is too short" }),
})

export const SigninValidation = z.object({
    // name: z.string().min(2, { message: "Name is too short" }), 
    // username: z.string().min(2, { message: "Username is too short" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password is too short" }),
})