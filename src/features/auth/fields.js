import { i18n } from '@i18n'

const fields = {
    code: { icon: 'fas fa-shield-alt', max: 999999, min: 10000, name: 'code', placeholder: i18n.t('labels.code'), type: 'number' },
    confirmNewPassword: {
        icon: 'fas fa-lock',
        maxLength: 16,
        name: 'confirmNewPassword',
        placeholder: i18n.t('labels.confirmNewPassword'),
        type: 'password',
    },
    email: { icon: 'fas fa-envelope', maxLength: 255, name: 'email', placeholder: i18n.t('labels.email'), type: 'email' },
    name: { icon: 'fas fa-address-card', maxLength: 120, name: 'name', placeholder: i18n.t('labels.fullName'), type: 'text' },
    newPassword: {
        icon: 'fas fa-lock',
        maxLength: 16,
        name: 'newPassword',
        placeholder: i18n.t('labels.newPassword'),
        type: 'password',
    },
    password: { icon: 'fas fa-lock', maxLength: 16, name: 'password', placeholder: i18n.t('labels.password'), type: 'password' },
    username: { icon: 'fas fa-user', maxLength: 30, name: 'username', placeholder: i18n.t('labels.username'), type: 'text' },
}

const forgotPassword = [fields.email]

const resetPassword = [fields.code, fields.newPassword, fields.confirmNewPassword]

const signIn = [fields.email, fields.password]

const signUp = [fields.name, fields.username, fields.email, fields.password]

export { forgotPassword, resetPassword, signIn, signUp }
