import { all } from 'redux-saga/effects'

import { sagas as authSagas } from '@features/auth/sagas'

function* sagas() {
    yield all([authSagas()])
}

export { sagas }
