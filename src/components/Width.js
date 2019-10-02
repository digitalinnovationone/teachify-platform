import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledWidth = styled.div`
    width: ${({ value }) => value}%;
`

const Width = ({ children, value }) => <StyledWidth value={value}>{children}</StyledWidth>

Width.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    value: PropTypes.number.isRequired,
}

export default Width
