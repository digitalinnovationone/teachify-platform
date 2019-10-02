import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import Form from '../pages/Form'

const mapDispatchToProps = {
    dispatchGetCourse: actions.requestGetCourse,
    dispatchSaveCourse: actions.requestSaveCourse,
}

const mapStateToProps = state => ({
    course: selectors.getCourse(state),
    courses: selectors.getCourses(state),
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form)
