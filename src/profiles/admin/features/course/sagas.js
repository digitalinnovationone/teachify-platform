import { actionsTypes } from './constants'

import { all, put, takeLatest } from 'redux-saga/effects'

import { routes } from '@routes'

import { getAction } from '@utils/actions'
import { handleError, handleRequest } from '@utils/sagas'
import { navigateTo } from '@utils/browser'

import { actions } from './actions'
import { services } from './services'

function* getCourses() {
    try {
        const courses = yield handleRequest(services.getAll, null, actions.setLoading)
        yield put(actions.setCourses(courses))
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* saveCourse({ payload }) {
    try {
        yield handleRequest(services.save, payload, actions.setLoading)
        yield navigateTo(routes.courseList)
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* watchGetCourses() {
    yield takeLatest(getAction(actionsTypes.COURSE_REQUEST_GET_COURSES), getCourses)
}

function* watchSaveCourse() {
    yield takeLatest(getAction(actionsTypes.COURSE_REQUEST_SAVE_COURSE), saveCourse)
}

function* sagas() {
    yield all([watchGetCourses(), watchSaveCourse()])
}

export { sagas }
