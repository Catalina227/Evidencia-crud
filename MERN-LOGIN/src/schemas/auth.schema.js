import {z} from 'zod';

export const registerSchema = z.object({
    username : z.string({
        required_error: "Username is a required field"
    }),
    email : z.string({
        required_error_error:"Email adreess is a required field",
    }).email({
        message: 'Invalid Email Adress'
    }),
    password: z.string({
        required_error: 'password is requiered field'
    }).min (6,{
        message: 'Password must be at least 6 characters long.'
    })
});


export const loginSchema = z.object({
    email : z.string({
        required_error_error:"Email adreess is a required field",
    }).email({
        message: 'Invalid Email Adress'
    }),
    password: z.string({
        required_error: 'password is requiered field'
    }).min (6,{
        message: 'Password must be at least 6 characters long.'
    })
})
