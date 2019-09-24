import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.i`
    font-size: ${({ fontSize }) => fontSize}rem;
    margin-right: 0.25rem;
    vertical-align: middle;
`

const Icon = ({ icon, fontSize }) => <StyledIcon className={icon} fontSize={fontSize} />

Icon.defaultProps = {
    fontSize: 1,
}

Icon.propTypes = {
    fontSize: PropTypes.number,
    icon: PropTypes.string.isRequired,
}

export { StyledIcon }
export default Icon
