import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const loading = createAction(actionsTypes.AUTH_LOADING)
const requestConfirmCode = createAction(actionsTypes.AUTH_REQUEST_CONFIRM_CODE)
const requestForgotPassword = createAction(actionsTypes.AUTH_REQUEST_FORGOT_PASSWORD)
const requestResendCode = createAction(actionsTypes.AUTH_REQUEST_RESEND_CODE)
const requestResetPassword = createAction(actionsTypes.AUTH_REQUEST_RESET_PASSWORD)
const requestSignIn = createAction(actionsTypes.AUTH_REQUEST_SIGN_IN)
const requestSignUp = createAction(actionsTypes.AUTH_REQUEST_SIGN_UP)

const actions = {
    loading,
    requestConfirmCode,
    requestForgotPassword,
    requestResendCode,
    requestResetPassword,
    requestSignIn,
    requestSignUp,
}

export { actions }
