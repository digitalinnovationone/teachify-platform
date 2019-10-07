import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon, { StyledIcon } from '../Icon'

const StyledFormIcon = styled.span`
    left: 16px;
    position: absolute;
    top: 13px;
    ${StyledIcon} {
        color: ${({ theme }) => theme.colors.textLight};
    }
`

const FormIcon = ({ icon }) => (
    <StyledFormIcon>
        <Icon fontSize={2} icon={icon} />
    </StyledFormIcon>
)

FormIcon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default FormIcon
