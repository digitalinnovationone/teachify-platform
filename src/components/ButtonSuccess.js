import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledButtonSuccess = styled.button`
    background: ${({ theme }) => theme.colors.success};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.textAlt};
    padding: 0.5rem 1rem;
    transition: background 0.2s linear;
    &:hover {
        background: ${({ theme }) => theme.colors.successHover};
    }
`

const ButtonSuccess = ({ children, onClick, type }) => (
    <StyledButtonSuccess onClick={onClick} type={type}>
        {children}
    </StyledButtonSuccess>
)

ButtonSuccess.defaultProps = {
    onClick: null,
    type: 'button',
}

ButtonSuccess.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default ButtonSuccess
