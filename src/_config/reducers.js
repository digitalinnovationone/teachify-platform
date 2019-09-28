import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import { history } from './history'

import { reducers as authReducers } from '@features/auth/reducers'
import { reducers as profileReducers } from '@features/profile/reducers'

const reducers = combineReducers({
    authReducers,
    profileReducers,
    router: connectRouter(history),
})

export { reducers }
