import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon from '../Icon'

const StyledSocialNetworkLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    display: block;
    padding-left: 0.75rem;
    transition: all 0.2s linear;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.5);
    }
`

const SocialNetworkLink = ({ icon, link }) => (
    <StyledSocialNetworkLink href={link} target="_blank">
        <Icon icon={icon} />
    </StyledSocialNetworkLink>
)

SocialNetworkLink.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default SocialNetworkLink
