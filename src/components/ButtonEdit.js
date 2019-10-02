import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

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
`

const ButtonEdit = ({ children, onClick }) => (
    <StyledButtonEdit onClick={onClick} type="button">
        {children}
    </StyledButtonEdit>
)

ButtonEdit.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export { StyledButtonEdit }
export default ButtonEdit
