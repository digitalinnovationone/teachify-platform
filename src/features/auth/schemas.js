import { number, object, string } from 'yup'

const schemas = {
    code: number()
        .min(10000)
        .max(999999)
        .required(),
    email: string()
        .email()
        .min(5)
        .max(255)
        .lowercase()
        .trim()
        .required(),
    name: string()
        .min(1)
        .max(120)
        .trim()
        .required(),
    password: string()
        .min(8)
        .max(16)
        .trim()
        .required(),
    username: string()
        .min(1)
        .max(30)
        .trim()
        .required(),
}

const forgotPassword = object().shape({
    email: schemas.email,
})

const resetPassword = object().shape({
    code: schemas.code,
    confirmNewPassword: schemas.password,
    newPassword: schemas.password,
})

const signIn = object().shape({
    email: schemas.email,
    password: schemas.password,
})

const signUp = object().shape({
    email: schemas.email,
    name: schemas.email,
    password: schemas.password,
    username: schemas.email,
})

export { forgotPassword, resetPassword, signIn, signUp }
