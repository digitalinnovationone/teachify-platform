import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import ForgotPassword from '../pages/ForgotPassword'

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

const mapDispatchToProps = {
    dispatchForgotPassword: actions.requestForgotPassword,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ForgotPassword)
