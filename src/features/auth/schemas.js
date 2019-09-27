import { number, object, ref, string } from 'yup'

import { i18n } from '@i18n'

const schemas = {
    code: number()
        .min(10000)
        .max(999999)
        .required()
        .label(i18n.t('labels.code')),
    confirmPassword: string()
        .oneOf([ref('password')], i18n.t('form.validations.confirmPassword'))
        .min(8)
        .max(16)
        .trim()
        .required()
        .label(i18n.t('labels.confirmPassword')),
    email: string()
        .email()
        .min(5)
        .max(255)
        .lowercase()
        .trim()
        .required()
        .label(i18n.t('labels.email')),
    name: string()
        .min(1)
        .max(120)
        .trim()
        .required()
        .label(i18n.t('labels.fullName')),
    password: string()
        .min(8)
        .max(16)
        .trim()
        .required()
        .label(i18n.t('labels.password')),
}

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
