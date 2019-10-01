import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import ConfirmCode from '../pages/ConfirmCode'

const mapDispatchToProps = {
    dispatchConfirmCode: actions.requestConfirmCode,
    dispatchResendCode: actions.requestResendCode,
}

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfirmCode)
