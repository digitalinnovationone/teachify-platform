import { object, string } from 'yup'

const signIn = object().shape({
    email: string()
        .email()
        .min(5)
        .max(255)
        .lowercase()
        .trim()
        .required(),
    password: string()
        .min(8)
        .max(16)
        .trim()
        .required(),
})

export { signIn }
