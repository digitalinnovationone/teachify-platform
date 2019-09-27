import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import ConfirmCode from '../pages/ConfirmCode'

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

const mapDispatchToProps = {
    dispatchConfirmCode: actions.requestConfirmCode,
    dispatchResendCode: actions.requestResendCode,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfirmCode)
