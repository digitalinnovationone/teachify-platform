import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'

import { colors } from '@helpers/colors'

const SIZES = {
    lg: 150,
    md: 100,
    sm: 50,
}

const rotating = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`

const StyledLoading = styled.span`
    animation: ${rotating} 1.5s cubic-bezier(0.1, 0.25, 0.5, 1) infinite;
    border: 5px solid #dcdcdc;
    border-left-color: ${colors.primary};
    border-radius: 100%;
    display: inline-block;
    height: ${({ size }) => SIZES[size]}px;
    width: ${({ size }) => SIZES[size]}px;
`

const Loading = ({ size }) => <StyledLoading size={size} />

Loading.defaultProps = {
    size: 'sm',
}

Loading.propTypes = {
    size: PropTypes.oneOf(['lg', 'md', 'sm']),
}

export default Loading
