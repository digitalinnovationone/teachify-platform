import { createSelector } from 'reselect'

const REDUCER_NAME = 'courseReducers'

const getLoading = createSelector(
    state => state[REDUCER_NAME].loading,
    loading => loading,
)

const getCourse = createSelector(
    state => state[REDUCER_NAME].course,
    course => course,
)

const getCourses = createSelector(
    state => state[REDUCER_NAME].courses,
    courses => courses,
)

const selectors = {
    getCourse,
    getCourses,
    getLoading,
}

export { selectors }
