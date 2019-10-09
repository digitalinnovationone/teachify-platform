import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import { StyledIcon } from '@components/Icon'

const StyledCardButton = styled.button`
    background: ${colors.primary};
    border-radius: 100%;
    color: ${colors.textAlt};
    padding: 0.25rem 0.5rem;
    position: absolute;
    right: 1rem;
    top: 10px;
    ${StyledIcon} {
        font-size: 0.8rem;
        margin-right: 0;
    }
`

const CardButton = ({ children, onClick }) => <StyledCardButton onClick={onClick}>{children}</StyledCardButton>

CardButton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CardButton
