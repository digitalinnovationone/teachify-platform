import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SocialNetworkLink from './SocialNetworkLink'

const StyledSocialNetwork = styled.li`
    list-style: none;
`

const SocialNetwork = ({ icon, link }) => (
    <StyledSocialNetwork>
        <SocialNetworkLink icon={icon} link={link} />
    </StyledSocialNetwork>
)

SocialNetwork.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default SocialNetwork
