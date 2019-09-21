import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'

import { history } from './history'

const reducers = combineReducers({
    router: connectRouter(history),
})

export { reducers }
