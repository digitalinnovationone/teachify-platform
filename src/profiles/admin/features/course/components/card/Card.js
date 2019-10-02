import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import CardBody from './CardBody'
import CardHeader from './CardHeader'

const StyledCard = styled.div``

const Card = ({ children, onAdd, title }) => (
    <StyledCard>
        <CardHeader onAdd={onAdd}>{title}</CardHeader>
        <CardBody>{children}</CardBody>
    </StyledCard>
)

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    onAdd: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card
