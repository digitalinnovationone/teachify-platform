import React from 'react'
import styled from 'styled-components'

import { defaultProps } from '@helpers/defaultProps'
import { field } from '@helpers/mixins'
import { propTypes } from '@helpers/propTypes'

const StyledFormInput = styled.input`
    ${field};
`

const FormInput = props => <StyledFormInput {...props} />

FormInput.defaultProps = defaultProps.field
FormInput.propTypes = propTypes.field

export default FormInput
