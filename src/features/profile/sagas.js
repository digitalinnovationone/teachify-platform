import { actionsTypes } from './constants'

import { all, put, takeLatest } from 'redux-saga/effects'

import { getAction } from '@utils/actions'
import { handleError, handleRequest } from '@utils/sagas'

import { actions } from './actions'
import { services } from './services'

function* getUser({ payload }) {
    try {
        const user = yield handleRequest(services.getOneById, payload, actions.setLoading)
        yield put(actions.setUser(user))
    } catch (error) {
        yield handleError(error, actions.loading)
    }
}

function* watchGetUser() {
    yield takeLatest(getAction(actionsTypes.PROFILE_REQUEST_GET_USER), getUser)
}

function* sagas() {
    yield all([watchGetUser()])
}

export { sagas }
