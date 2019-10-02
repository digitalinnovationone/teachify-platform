import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledAlign = styled.div`
    text-align: ${({ value }) => value};
`

const Align = ({ children, value }) => <StyledAlign value={value}>{children}</StyledAlign>

Align.defaultProps = {
    value: 'left',
}

Align.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    value: PropTypes.string,
}

export default Align
