import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSubTitle = styled.h3`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 100;
    text-transform: lowercase;
`

const SubTitle = ({ children }) => <StyledSubTitle>{children}</StyledSubTitle>

SubTitle.propTypes = {
    children: PropTypes.string.isRequired,
}

export default SubTitle
