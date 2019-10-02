import { handleActions } from '@utils/actions'

import { actions } from './actions'
import { store } from './store'

const reducers = handleActions(
    {
        [actions.removeCourse]: (state, { payload }) => {
            state.courses = state.courses.filter(course => course.id !== payload.id)
        },
        [actions.setLoading]: (state, { payload }) => {
            state.loading = payload
        },
        [actions.setCourse]: (state, { payload }) => {
            state.course = payload
        },
        [actions.setCourses]: (state, { payload }) => {
            state.course = {}
            state.courses = payload
        },
    },
    store,
)

export { reducers }
