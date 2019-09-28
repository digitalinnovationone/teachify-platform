import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const requestConfirmCode = createAction(actionsTypes.AUTH_REQUEST_CONFIRM_CODE)
const requestForgotPassword = createAction(actionsTypes.AUTH_REQUEST_FORGOT_PASSWORD)
const requestResendCode = createAction(actionsTypes.AUTH_REQUEST_RESEND_CODE)
const requestResetPassword = createAction(actionsTypes.AUTH_REQUEST_RESET_PASSWORD)
const requestSignIn = createAction(actionsTypes.AUTH_REQUEST_SIGN_IN)
const requestSignUp = createAction(actionsTypes.AUTH_REQUEST_SIGN_UP)
const setLoading = createAction(actionsTypes.AUTH_SET_LOADING)

const actions = {
    requestConfirmCode,
    requestForgotPassword,
    requestResendCode,
    requestResetPassword,
    requestSignIn,
    requestSignUp,
    setLoading,
}

export { actions }
