import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import SignUp from '../pages/SignUp'

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

const mapDispatchToProps = {
    dispatchSignUp: actions.requestSignUp,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp)
