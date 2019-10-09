import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import { StyledIcon } from './Icon'

const StyledButtonEdit = styled.button`
    background: ${colors.warning};
    border: none;
    border-radius: 4px;
    color: ${colors.textAlt};
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    transition: background 0.2s linear;
    &:hover {
        background: ${colors.warningHover};
    }
    ${StyledIcon} {
        margin-right: 0;
    }
`

const ButtonEdit = ({ children, onClick }) => (
    <StyledButtonEdit onClick={onClick} type="button">
        {children}
    </StyledButtonEdit>
)

ButtonEdit.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export { StyledButtonEdit }
export default ButtonEdit
