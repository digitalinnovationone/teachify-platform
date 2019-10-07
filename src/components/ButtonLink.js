import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledButtonLink = styled.button`
    background: transparent;
    border: none;
    border-bottom: ${({ theme }) => theme.borders.primaryLink};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0 0.5rem;
    text-transform: lowercase;
`

const ButtonLink = ({ children, onClick, type }) => (
    <StyledButtonLink onClick={onClick} type={type}>
        {children}
    </StyledButtonLink>
)

ButtonLink.defaultProps = {
    type: 'button',
}

ButtonLink.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default ButtonLink
