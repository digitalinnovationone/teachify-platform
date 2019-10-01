import { handleAPI } from '@utils/http'

import { apis } from './apis'

const forgotPassword = payload => handleAPI(apis.forgotPassword, payload)
const confirmCode = payload => handleAPI(apis.confirmCode, payload)
const resendCode = payload => handleAPI(apis.resendCode, payload)
const resetPassword = payload => handleAPI(apis.resetPassword, payload)
const signIn = payload => handleAPI(apis.signIn, payload)
const signUp = payload => handleAPI(apis.signUp, payload)

const services = {
    confirmCode,
    forgotPassword,
    resendCode,
    resetPassword,
    signIn,
    signUp,
}

export { services }
