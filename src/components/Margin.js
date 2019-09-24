import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledMargin = styled.div`
    margin: ${({ bottom, left, right, top }) => `${top}rem ${right}rem ${bottom}rem ${left}rem`};
`

const Margin = ({ children, ...props }) => <StyledMargin {...props}>{children}</StyledMargin>

Margin.defaultProps = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
}

Margin.propTypes = {
    bottom: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
}

export default Margin
