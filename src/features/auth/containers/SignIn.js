import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import SignIn from '../pages/SignIn'

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

const mapDispatchToProps = {
    dispatchSignIn: actions.requestSignIn,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn)
