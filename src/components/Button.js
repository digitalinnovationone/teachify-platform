import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledButton = styled.button`
    background: ${colors.primary};
    border: none;
    border-radius: 40px;
    color: ${colors.textAlt};
    padding: 1rem 5rem;
    transition: background 0.2s linear;
    &:hover {
        background: ${colors.primaryHover};
    }
`

const Button = ({ children, onClick, type }) => (
    <StyledButton onClick={onClick} type={type}>
        {children}
    </StyledButton>
)

Button.defaultProps = {
    type: 'submit',
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default Button
