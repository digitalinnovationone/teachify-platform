import { fields } from '@helpers/fields'

const forgotPassword = [fields.email]

const resetPassword = [fields.code, fields.password, fields.confirmPassword]

const signIn = [fields.email, fields.password]

const signUp = [fields.name, fields.email, fields.password, fields.confirmPassword]

export { forgotPassword, resetPassword, signIn, signUp }
