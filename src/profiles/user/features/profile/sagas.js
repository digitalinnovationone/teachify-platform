import { actionsTypes } from './constants'

import { all, put, takeLatest } from 'redux-saga/effects'

import { i18n } from '@i18n'
import { routes } from '@routes'

import { getAction } from '@utils/actions'
import { alerts } from '@utils/alert'
import { logout } from '@utils/auth'
import { navigateTo } from '@utils/browser'
import { handleError, handleRequest } from '@utils/sagas'

import { actions } from './actions'
import { services } from './services'

function* getUser({ payload }) {
    try {
        const user = yield handleRequest(services.getOneById, payload, actions.setLoading)
        yield put(actions.setUser(user))
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* removeUser({ payload }) {
    try {
        const result = yield alerts.confirm({
            text: i18n.t('texts.removeAccount'),
            title: i18n.t('titles.removeAccount'),
        })
        if (result && result.value) {
            yield handleRequest(services.remove, payload, actions.setLoading)
            yield logout()
            yield navigateTo(routes.signIn)
            yield alerts.success({
                text: i18n.t('texts.accountRemoved'),
                title: i18n.t('titles.accountRemoved'),
            })
        }
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* updatePassword({ payload }) {
    try {
        yield handleRequest(services.updatePassword, payload, actions.setLoading)
        yield alerts.success({
            text: i18n.t('texts.passwordUpated'),
            title: i18n.t('titles.passwordUpated'),
        })
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* updateUser({ payload }) {
    try {
        yield handleRequest(services.update, payload, actions.setLoading)
        yield put(actions.setUser(payload))
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* watchGetUser() {
    yield takeLatest(getAction(actionsTypes.PROFILE_REQUEST_GET_USER), getUser)
}

function* watchRemoveUser() {
    yield takeLatest(getAction(actionsTypes.PROFILE_REQUEST_REMOVE_USER), removeUser)
}

function* watchUpdatePassword() {
    yield takeLatest(getAction(actionsTypes.PROFILE_REQUEST_UPDATE_PASSWORD), updatePassword)
}

function* watchUpdateUser() {
    yield takeLatest(getAction(actionsTypes.PROFILE_REQUEST_UPDATE_USER), updateUser)
}

function* sagas() {
    yield all([watchGetUser(), watchRemoveUser(), watchUpdatePassword(), watchUpdateUser()])
}

export { sagas }
