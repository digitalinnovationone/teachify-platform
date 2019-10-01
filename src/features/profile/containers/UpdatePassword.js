import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import UpdatePassword from '../pages/UpdatePassword'

const mapDispatchToProps = {
    dispatchUpdatePassword: actions.requestUpdatePassword,
}

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UpdatePassword)
