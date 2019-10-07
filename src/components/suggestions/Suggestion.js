import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSuggestion = styled.a`
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.8rem;
    font-weight: 300;
    padding-right: 0.75rem;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
    }
`

const Suggestion = ({ children, link }) => (
    <StyledSuggestion href={link} target="_blank">
        {children}
    </StyledSuggestion>
)

Suggestion.propTypes = {
    children: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default Suggestion
