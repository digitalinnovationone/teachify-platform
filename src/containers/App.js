import PropTypes from 'prop-types'
import React from 'react'

const App = ({ children }) => <>{children}</>

App.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default App
