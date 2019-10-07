import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
`

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>

Title.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Title
