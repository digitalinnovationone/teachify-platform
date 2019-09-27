import produce from 'immer'

import { createAction as reduxCreateAction, handleActions as raHandeActions } from 'redux-actions'

import { config } from '@config'

const createAction = name => reduxCreateAction(`${config.app.namespace.toUpperCase()}/${name.toUpperCase()}`)
const getAction = name => `${config.app.namespace.toUpperCase()}/${name.toUpperCase()}`

const handleActions = (actions, state) =>
    raHandeActions(
        Object.keys(actions).reduce((newActions, key) => {
            newActions[key] = produce(actions[key])
            return newActions
        }, {}),
        state,
    )

export { createAction, getAction, handleActions }
