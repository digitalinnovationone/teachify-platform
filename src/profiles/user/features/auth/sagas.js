import { actionsTypes } from './constants'

import { all, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'
import { routes } from '@routes'

import { alerts } from '@utils/alert'
import { getAction } from '@utils/actions'
import { handleError, handleRequest } from '@utils/sagas'
import { THEMES, getTheme, navigateTo, setTheme } from '@utils/browser'
import { login } from '@utils/auth'

import { actions } from './actions'
import { services } from './services'

function* confirmCode({ payload }) {
    try {
        yield handleRequest(services.confirmCode, payload, actions.setLoading)
        yield navigateTo(routes.signIn)
        yield alerts.success({
            text: i18n.t('success.functions.confirmCode'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* forgotPassword({ payload }) {
    try {
        yield handleRequest(services.forgotPassword, payload, actions.setLoading)
        yield navigateTo(`${routes.resetPassword}?email=${payload.email}`)
        yield alerts.success({
            text: i18n.t('success.functions.forgotPassword'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* resendCode({ payload }) {
    try {
        yield handleRequest(services.resendCode, payload, actions.setLoading)
        yield alerts.success({
            text: i18n.t('success.functions.resendCode'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* resetPassword({ payload }) {
    try {
        yield handleRequest(services.resetPassword, payload, actions.setLoading)
        yield navigateTo(routes.signIn)
        yield alerts.success({
            text: i18n.t('success.functions.resetPassword'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* signIn({ payload }) {
    try {
        const token = yield handleRequest(services.signIn, payload, actions.setLoading)
        yield login(token)
        yield setTheme(getTheme() || THEMES.light)
        yield navigateTo(routes.home)
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* signUp({ payload }) {
    try {
        yield handleRequest(services.signUp, payload, actions.setLoading)
        yield navigateTo(`${routes.confirmCode}?email=${payload.email}`)
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* watchConfirmCode() {
    yield takeLatest(getAction(actionsTypes.AUTH_REQUEST_CONFIRM_CODE), confirmCode)
}

function* watchForgotPassword() {
    yield takeLatest(getAction(actionsTypes.AUTH_REQUEST_FORGOT_PASSWORD), forgotPassword)
}

function* watchResendCode() {
    yield takeLatest(getAction(actionsTypes.AUTH_REQUEST_RESEND_CODE), resendCode)
}

function* watchResetPassword() {
    yield takeLatest(getAction(actionsTypes.AUTH_REQUEST_RESET_PASSWORD), resetPassword)
}

function* watchSignIn() {
    yield takeLatest(getAction(actionsTypes.AUTH_REQUEST_SIGN_IN), signIn)
}

function* watchSignUp() {
    yield takeLatest(getAction(actionsTypes.AUTH_REQUEST_SIGN_UP), signUp)
}

function* sagas() {
    yield all([watchConfirmCode(), watchForgotPassword(), watchResendCode(), watchResetPassword(), watchSignIn(), watchSignUp()])
}

export { sagas }
