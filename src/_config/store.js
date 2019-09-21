import { environments } from '@constants/environments'

import { createLogger } from 'redux-logger'

import createSagaMiddleware from 'redux-saga'

import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import { history } from './history'
import { reducers } from './reducers'

import { sagas } from './sagas'

import { config } from '@config'

import { reactotron } from './reactotron'

const isDevelopment = config.app.environment === environments.development

const logger = createLogger()

const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: isDevelopment ? reactotron.createSagaMonitor() : null,
})

const initialState = {}
const enhancers = []
const middleware = [routerMiddleware(history), sagaMiddleware]

if (isDevelopment) {
    enhancers.push(reactotron.createEnhancer())
    middleware.push(logger)
}

const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    compose(composeWithDevTools(applyMiddleware(...middleware), ...enhancers)),
)

sagaMiddleware.run(sagas)

export { store }
