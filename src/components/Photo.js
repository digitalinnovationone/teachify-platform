import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import { nameToPhoto } from '@utils/string'

import { colors } from '@helpers/colors'

import If from './If'

const photo = css`
    border-radius: 100%;
    margin-right: 1rem;
    padding: 0.7rem 0.5rem;
`

const StyledImage = styled.img`
    ${photo};
`

const StyledAlt = styled.span`
    background: ${colors.primary};
    color: ${colors.textAlt};
    display: inline-block;
    ${photo};
`

const Photo = ({ alt, source }) => (
    <If condition={!!source} el={<StyledAlt>{nameToPhoto(alt)}</StyledAlt>}>
        <StyledImage alt={alt} src={source} />
    </If>
)

Photo.propTypes = {
    alt: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
}

export default Photo
