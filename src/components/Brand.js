import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { i18n } from '@i18n'
import { routes } from '@routes'

import { dimensions } from '@helpers/dimensions'

import brand from '@img/brand.png'

const StyledLink = styled(Link)`
    border-right: ${({ theme }) => theme.borders.default};
    padding: 0.9rem;
    width: ${dimensions.menuWidth};
    &:hover {
        background: ${({ theme }) => theme.colors.backgroundAltHover};
    }
`

const StyledBrand = styled.img`
    height: 100%;
    width: 100%;
`

const Brand = () => (
    <StyledLink to={routes.home}>
        <StyledBrand alt={i18n.t('labels.teachifyLogo')} src={brand} />
    </StyledLink>
)

export default Brand
