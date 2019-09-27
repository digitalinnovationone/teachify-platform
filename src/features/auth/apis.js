import { http } from '@http'

const PREFIX_API = '/auth'

const confirmCode = payload => http.post(`${PREFIX_API}-confirmCode`, payload)
const forgotPassword = payload => http.post(`${PREFIX_API}-forgotPassword`, payload)
const resendCode = payload => http.post(`${PREFIX_API}-resendCode`, payload)
const resetPassword = payload => http.patch(`${PREFIX_API}-resetPassword`, payload)
const signIn = payload => http.post(`${PREFIX_API}-signIn`, payload)
const signUp = payload => http.post(`${PREFIX_API}-signUp`, payload)

const apis = {
    confirmCode,
    forgotPassword,
    resendCode,
    resetPassword,
    signIn,
    signUp,
}

export { apis }
