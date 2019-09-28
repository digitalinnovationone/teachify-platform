import { all } from 'redux-saga/effects'

import { sagas as authSagas } from '@features/auth/sagas'
import { sagas as profileSagas } from '@features/profile/sagas'

function* sagas() {
    yield all([authSagas(), profileSagas()])
}

export { sagas }
