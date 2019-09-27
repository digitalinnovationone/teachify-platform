import { actionsTypes } from './constants'

import { all, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'
import { routes } from '@routes'

import { alerts } from '@utils/alert'
import { getAction } from '@utils/actions'
import { handleError, handleRequest } from '@utils/sagas'
import { navigateTo } from '@utils/browser'
import { login } from '@utils/auth'

import { actions } from './actions'
import { services } from './services'

function* confirmCode({ payload }) {
    try {
        yield handleRequest(services.confirmCode, payload, actions.loading)
        yield navigateTo(routes.signIn)
        yield alerts.success({
            text: i18n.t('success.functions.confirmCode'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.loading)
    }
}

function* forgotPassword({ payload }) {
    try {
        yield handleRequest(services.forgotPassword, payload, actions.loading)
        yield navigateTo(`${routes.resetPassword}?email=${payload.email}`)
        yield alerts.success({
            text: i18n.t('success.functions.forgotPassword'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.loading)
    }
}

function* resendCode({ payload }) {
    try {
        yield handleRequest(services.resendCode, payload, actions.loading)
        yield alerts.success({
            text: i18n.t('success.functions.resendCode'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.loading)
    }
}

function* resetPassword({ payload }) {
    try {
        yield handleRequest(services.resetPassword, payload, actions.loading)
        yield navigateTo(routes.signIn)
        yield alerts.success({
            text: i18n.t('success.functions.resetPassword'),
            title: i18n.t('success.api'),
        })
    } catch (error) {
        yield handleError(error, actions.loading)
    }
}

function* signIn({ payload }) {
    try {
        const token = yield handleRequest(services.signIn, payload, actions.loading)
        yield login(token)
        yield navigateTo(routes.home)
    } catch (error) {
        yield handleError(error, actions.loading)
    }
}

function* signUp({ payload }) {
    try {
        yield handleRequest(services.signUp, payload, actions.loading)
        yield navigateTo(`${routes.confirmCode}?email=${payload.email}`)
    } catch (error) {
        yield handleError(error, actions.loading)
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
