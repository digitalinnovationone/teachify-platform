import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledMargin = styled.div`
    margin: ${({ all, bottom, left, right, top }) => `${top || all}rem ${right || all}rem ${bottom || all}rem ${left || all}rem`};
`

const Margin = ({ children, ...props }) => <StyledMargin {...props}>{children}</StyledMargin>

Margin.defaultProps = {
    all: 0,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
}

Margin.propTypes = {
    all: PropTypes.number,
    bottom: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
}

export default Margin
