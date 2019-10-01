import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import SignIn from '../pages/SignIn'

const mapDispatchToProps = {
    dispatchSignIn: actions.requestSignIn,
}

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn)
