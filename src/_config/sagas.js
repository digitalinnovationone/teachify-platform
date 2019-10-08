import { all } from 'redux-saga/effects'

import { isAdmin } from '@utils/auth'

import { sagas as courseSagas } from '@profiles/admin/features/course/sagas'
import { sagas as authSagas } from '@profiles/user/features/auth/sagas'
import { sagas as profileSagas } from '@profiles/user/features/profile/sagas'

function* sagas() {
    const allSagas = [authSagas(), profileSagas()]
    if (isAdmin()) {
        allSagas.push(courseSagas())
    }
    yield all(allSagas)
}

export { sagas }
