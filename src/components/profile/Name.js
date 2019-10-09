import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledName = styled.span`
    color: ${colors.text};
    font-size: 0.875rem;
    font-weight: 300;
`

const Name = ({ children }) => <StyledName>{children}</StyledName>

Name.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Name
