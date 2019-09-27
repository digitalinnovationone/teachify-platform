import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import Icon from '../Icon'

const StyledDropDown = styled.button`
    background: transparent;
    border: none;
    color: ${colors.textLight};
    margin-left: 1rem;
`

const DropDown = ({ expanded, onClick }) => (
    <StyledDropDown onClick={onClick}>
        <Icon icon={`fas fa-caret-${expanded ? 'up' : 'down'}`} />
    </StyledDropDown>
)

DropDown.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default DropDown
