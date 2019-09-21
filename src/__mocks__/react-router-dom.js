import PropTypes from 'prop-types'
import React from 'react'

const Link = props => {
    const { children } = props
    return <a {...props}>{children}</a>
}

Link.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

const withRouter = component => component

export { Link, withRouter }
