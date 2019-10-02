import { actionsTypes } from './constants'

import { all, put, takeLatest } from 'redux-saga/effects'

import { routes } from '@routes'

import { getAction } from '@utils/actions'
import { handleError, handleRequest } from '@utils/sagas'
import { navigateTo } from '@utils/browser'

import { actions } from './actions'
import { categoriesToString } from './domains'
import { services } from './services'

function* getCourse({ payload }) {
    try {
        const course = yield handleRequest(services.getOne, payload, actions.setLoading)
        yield put(actions.setCourse(categoriesToString(course)))
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* getCourses() {
    try {
        const courses = yield handleRequest(services.getAll, null, actions.setLoading)
        yield put(actions.setCourses(courses))
    } catch (error) {
        yield handleError(error, actions.setLoading)
    }
}

function* removeCourse({ payload }) {
    try {
        yield handleRequest(services.remove, payload, actions.setLoading)
        yield put(actions.removeCourse(payload))
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

function* watchGetCourse() {
    yield takeLatest(getAction(actionsTypes.COURSE_REQUEST_GET_COURSE), getCourse)
}

function* watchGetCourses() {
    yield takeLatest(getAction(actionsTypes.COURSE_REQUEST_GET_COURSES), getCourses)
}

function* watchRemoveCourse() {
    yield takeLatest(getAction(actionsTypes.COURSE_REQUEST_REMOVE_COURSE), removeCourse)
}

function* watchSaveCourse() {
    yield takeLatest(getAction(actionsTypes.COURSE_REQUEST_SAVE_COURSE), saveCourse)
}

function* sagas() {
    yield all([watchGetCourse(), watchGetCourses(), watchRemoveCourse(), watchSaveCourse()])
}

export { sagas }
