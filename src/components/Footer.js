import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'
import { dimensions } from '@helpers/dimensions'

const StyledFooter = styled.footer`
    background: ${colors.backgroundAlt};
    border-top: ${borders.default};
    grid-area: footer;
    margin-left: ${dimensions.menuWidth};
`

const Footer = () => <StyledFooter />

export default Footer
