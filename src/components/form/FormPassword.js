import { inputTypes } from '@constants/inputTypes'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon, { StyledIcon } from '../Icon'

const StyledFormPassword = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    right: 10px;
    top: 18px;
    ${StyledIcon} {
        color: ${({ theme }) => theme.colors.textLight};
    }
`

const ICONS = {
    password: 'fas fa-eye',
    text: 'fas fa-eye-slash',
}

const FormPassword = ({ index, onClick, type }) => (
    <StyledFormPassword onClick={() => onClick(index)} type="button">
        <Icon fontSize={1.5} icon={ICONS[type]} />
    </StyledFormPassword>
)

FormPassword.defaultProps = {
    index: 0,
    type: inputTypes.PASSWORD,
}

FormPassword.propTypes = {
    index: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default FormPassword
