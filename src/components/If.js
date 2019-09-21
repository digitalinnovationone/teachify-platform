import React from 'react'
import PropTypes from 'prop-types'

import { isFunction } from 'lodash'

const If = ({ children, condition, el }) => {
    if (condition) {
        if (isFunction(children)) {
            return React.createElement(children)
        }
        return children
    }

    if (isFunction(el)) {
        return React.createElement(el)
    }

    return el
}

If.defaultProps = {
    el: null,
}

If.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    condition: PropTypes.bool.isRequired,
    el: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]),
}

export default If
