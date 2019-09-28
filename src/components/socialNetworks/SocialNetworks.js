import React from 'react'
import styled from 'styled-components'

import SocialNetwork from './SocialNetwork'

const StyledSocialNetworks = styled.ul`
    display: flex;
`

const SocialNetworks = () => (
    <StyledSocialNetworks>
        <SocialNetwork icon="fab fa-facebook-square" link="https://www.facebook.com/teachify19" />
        <SocialNetwork icon="fab fa-github-square" link="https://github.com/teachify19" />
        <SocialNetwork icon="fab fa-instagram" link="https://www.instagram.com/teachify19" />
        <SocialNetwork icon="fab fa-linkedin" link="https://www.linkedin.com/company/teachify19/" />
        <SocialNetwork icon="fab fa-npm" link="https://www.npmjs.com/~teachify" />
        <SocialNetwork icon="fab fa-twitch" link="https://www.twitch.tv/teachify19" />
        <SocialNetwork icon="fab fa-twitter-square" link="https://twitter.com/teachify19" />
        <SocialNetwork icon="fab fa-vimeo" link="https://vimeo.com/teachify19" />
        <SocialNetwork icon="fab fa-youtube" link="" />
    </StyledSocialNetworks>
)

export default SocialNetworks
