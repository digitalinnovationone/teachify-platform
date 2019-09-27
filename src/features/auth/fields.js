import { i18n } from '@i18n'

const fields = {
    code: { icon: 'fas fa-shield-alt', max: 999999, min: 10000, name: 'code', placeholder: i18n.t('labels.code'), type: 'number' },
    confirmPassword: {
        icon: 'fas fa-lock',
        maxLength: 16,
        name: 'confirmPassword',
        placeholder: i18n.t('labels.confirmPassword'),
        type: 'password',
    },
    email: { icon: 'fas fa-envelope', maxLength: 255, name: 'email', placeholder: i18n.t('labels.email'), type: 'email' },
    name: { icon: 'fas fa-address-card', maxLength: 120, name: 'name', placeholder: i18n.t('labels.fullName'), type: 'text' },
    password: { icon: 'fas fa-lock', maxLength: 16, name: 'password', placeholder: i18n.t('labels.password'), type: 'password' },
}

const forgotPassword = [fields.email]

const resetPassword = [fields.code, fields.password, fields.confirmPassword]

const signIn = [fields.email, fields.password]

const signUp = [fields.name, fields.email, fields.password, fields.confirmPassword]

export { forgotPassword, resetPassword, signIn, signUp }
