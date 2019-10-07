import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { StyledIcon } from './Icon'

const StyledButtonCancel = styled.button`
    background: ${({ theme }) => theme.colors.error};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.textAlt};
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    transition: background 0.2s linear;
    &:hover {
        background: ${({ theme }) => theme.colors.errorHover};
    }
    ${StyledIcon} {
        margin-right: 0;
    }
`

const ButtonCancel = ({ children, onClick }) => (
    <StyledButtonCancel onClick={onClick} type="button">
        {children}
    </StyledButtonCancel>
)

ButtonCancel.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export { StyledButtonCancel }
export default ButtonCancel
