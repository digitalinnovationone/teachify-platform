import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { btnPrimary } from '@helpers/mixins'

import { StyledIcon } from './Icon'

const StyledFloatingButton = styled.button`
    border: none;
    border-radius: 100%;
    bottom: 2.5rem;
    ${btnPrimary};
    padding: 1rem 1.125rem;
    position: absolute;
    right: 1.5rem;
    transition: background 0.2s linear;
    ${StyledIcon} {
        margin-right: 0;
    }
`

const FloatingButton = ({ children, onClick }) => (
    <StyledFloatingButton onClick={onClick} type="button">
        {children}
    </StyledFloatingButton>
)

FloatingButton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default FloatingButton
