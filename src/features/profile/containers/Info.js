import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import Info from '../pages/Info'

const mapDispatchToProps = {
    dispatchGetUser: actions.requestGetUser,
}

const mapStateToProps = state => ({
    loading: selectors.getLoading(state),
    user: selectors.getUser(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Info)
