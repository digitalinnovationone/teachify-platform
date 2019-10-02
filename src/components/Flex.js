import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
    align-items: ${({ align }) => align};
    display: flex;
    justify-content: ${({ justify }) => justify};
`

const Flex = ({ align, children, justify }) => (
    <StyledFlex align={align} justify={justify}>
        {children}
    </StyledFlex>
)

Flex.defaultProps = {
    align: 'flex-start',
    justify: 'space-between',
}

Flex.propTypes = {
    align: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    justify: PropTypes.string,
}

export default Flex
