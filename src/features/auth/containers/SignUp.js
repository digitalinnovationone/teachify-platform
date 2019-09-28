import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import SignUp from '../pages/SignUp'

const mapDispatchToProps = {
    dispatchSignUp: actions.requestSignUp,
}

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp)
