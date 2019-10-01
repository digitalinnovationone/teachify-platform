import { object } from 'yup'

import { schemas } from '@helpers/schemas'

const forgotPassword = object().shape({
    email: schemas.email,
})

const resetPassword = object().shape({
    code: schemas.code,
    confirmPassword: schemas.confirmPassword,
    password: schemas.password,
})

const signIn = object().shape({
    email: schemas.email,
    password: schemas.password,
})

const signUp = object().shape({
    confirmPassword: schemas.confirmPassword,
    email: schemas.email,
    name: schemas.name,
    password: schemas.password,
})

export { forgotPassword, resetPassword, signIn, signUp }
