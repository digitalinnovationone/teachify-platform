import { call, put } from 'redux-saga/effects'

import { i18n } from '@i18n'

import { alerts } from './alert'

function* handleRequest(service, payload, dispatchLoading) {
    yield put(dispatchLoading(true))
    const resp = yield call(service, payload)
    yield put(dispatchLoading(false))
    return resp
}

function* handleError(error, dispatchLoading) {
    yield put(dispatchLoading(false))
    yield alerts.error({
        text: error.message,
        title: i18n.t('errors.api'),
    })
}

export { handleError, handleRequest }
