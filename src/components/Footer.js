import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'
import { dimensions } from '@helpers/dimensions'

const StyledFooter = styled.footer`
    background: ${colors.background};
    border-left: ${borders.default};
    grid-area: footer;
    margin-left: calc(${dimensions.menuWidth} - 1px);
`

const Footer = () => <StyledFooter />

export default Footer
