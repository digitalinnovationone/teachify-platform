import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon from '@components/Icon'

import CardButton from './CardButton'

const StyledCardHeader = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: ${({ theme }) => theme.colors.textAlt};
    padding: 1rem;
    position: relative;
`

const CardHeader = ({ children, onAdd }) => (
    <StyledCardHeader>
        <CardButton onClick={onAdd}>
            <Icon icon="fas fa-plus" />
        </CardButton>
        {children}
    </StyledCardHeader>
)

CardHeader.propTypes = {
    children: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
}

export default CardHeader
