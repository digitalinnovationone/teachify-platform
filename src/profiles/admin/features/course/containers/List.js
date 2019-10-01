import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import List from '../pages/List'

const mapDispatchToProps = {
    dispatchGetCourses: actions.requestGetCourses,
}

const mapStateToProps = state => ({
    courses: selectors.getCourses(state),
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(List)
