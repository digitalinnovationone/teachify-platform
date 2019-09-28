import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledCenter = styled.div`
    text-align: center;
`

const Center = ({ children }) => <StyledCenter>{children}</StyledCenter>

Center.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default Center
