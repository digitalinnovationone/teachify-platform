import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import ResetPassword from '../pages/ResetPassword'

const mapDispatchToProps = {
    dispatchResetPassword: actions.requestResetPassword,
}

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ResetPassword)
