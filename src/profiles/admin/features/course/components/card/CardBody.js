import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'

const StyledCardBody = styled.div`
    border: ${borders.default};
    border-top: none;
`

const CardBody = ({ children }) => <StyledCardBody>{children}</StyledCardBody>

CardBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default CardBody
