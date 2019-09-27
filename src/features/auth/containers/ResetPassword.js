import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import ResetPassword from '../pages/ResetPassword'

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

const mapDispatchToProps = {
    dispatchResetPassword: actions.requestResetPassword,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ResetPassword)
