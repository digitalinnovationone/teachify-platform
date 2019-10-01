import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { btnDanger, btnPrimary } from '@helpers/mixins'

const StyledButton = styled.button`
    border: none;
    border-radius: 40px;
    ${({ danger }) => (danger ? btnDanger : btnPrimary)};
    padding: 1rem 5rem;
    transition: background 0.2s linear;
`

const Button = ({ children, danger, onClick, type }) => (
    <StyledButton danger={danger} onClick={onClick} type={type}>
        {children}
    </StyledButton>
)

Button.defaultProps = {
    danger: false,
    type: 'submit',
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    danger: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default Button
