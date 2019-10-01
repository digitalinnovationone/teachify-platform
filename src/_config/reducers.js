import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import { history } from './history'

import { isAdmin } from '@utils/auth'

import { reducers as authReducers } from '@profiles/user/features/auth/reducers'
import { reducers as profileReducers } from '@profiles/user/features/profile/reducers'

import { reducers as courseReducers } from '@profiles/admin/features/course/reducers'

const allReducers = {
    authReducers,
    profileReducers,
    router: connectRouter(history),
}

if (isAdmin()) {
    allReducers.courseReducers = courseReducers
}

const reducers = combineReducers(allReducers)

export { reducers }
