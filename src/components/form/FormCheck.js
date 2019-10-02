import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'
import { defaultProps } from '@helpers/defaultProps'
import { propTypes } from '@helpers/propTypes'

const StyledLabel = styled.label`
    color: ${colors.text};
    display: block;
    padding: 0 0.5rem;
    text-align: left;
`

const StyledFormCheck = styled.input`
    display: block;
    margin-top: 0.5rem;
`

const FormCheck = ({ placeholder, value, ...props }) => (
    <StyledLabel>
        {placeholder}
        <StyledFormCheck {...props} checked={value} placeholder={placeholder} />
    </StyledLabel>
)

FormCheck.defaultProps = defaultProps.field
FormCheck.propTypes = propTypes.field

export default FormCheck
