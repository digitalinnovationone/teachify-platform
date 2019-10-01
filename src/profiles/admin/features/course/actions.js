import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const requestGetCourses = createAction(actionsTypes.COURSE_REQUEST_GET_COURSES)
const setCourses = createAction(actionsTypes.COURSE_SET_COURSES)
const setLoading = createAction(actionsTypes.COURSE_SET_LOADING)

const actions = {
    requestGetCourses,
    setCourses,
    setLoading,
}

export { actions }
