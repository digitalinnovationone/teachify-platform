import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import ForgotPassword from '../pages/ForgotPassword'

const mapDispatchToProps = {
    dispatchForgotPassword: actions.requestForgotPassword,
}

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ForgotPassword)
