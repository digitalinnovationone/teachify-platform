import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledAuthor = styled.span`
    bottom: 10px;
    color: #333;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const StyledBackground = styled.div`
    background-image: url(${({ source }) => source});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 40vw;
`

const StyledLink = styled.a`
    position: relative;
`

const Background = ({ author, source }) => (
    <StyledLink href="http://www.freepik.com" rel="noopener noreferrer" target="_blank">
        <StyledBackground source={source} />
        <StyledAuthor>{author}</StyledAuthor>
    </StyledLink>
)

Background.propTypes = {
    author: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
}

export default Background
