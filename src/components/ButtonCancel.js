import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledButtonCancel = styled.button`
    background: ${colors.error};
    border: none;
    border-radius: 4px;
    color: ${colors.textAlt};
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    transition: background 0.2s linear;
    &:hover {
        background: ${colors.errorHover};
    }
`

const ButtonCancel = ({ children, onClick }) => (
    <StyledButtonCancel onClick={onClick} type="button">
        {children}
    </StyledButtonCancel>
)

ButtonCancel.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ButtonCancel
