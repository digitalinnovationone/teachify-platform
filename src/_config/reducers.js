import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import { history } from './history'

import { reducers as authReducers } from '@features/auth/reducers'

const reducers = combineReducers({
    authReducers,
    router: connectRouter(history),
})

export { reducers }
