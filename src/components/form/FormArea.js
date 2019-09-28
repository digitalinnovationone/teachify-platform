import React from 'react'
import styled from 'styled-components'

import { defaultProps } from '@helpers/defaultProps'
import { field } from '@helpers/mixins'
import { propTypes } from '@helpers/propTypes'

const StyledFormArea = styled.textarea`
    height: 200px;
    ${field};
    resize: none;
`

const FormArea = props => <StyledFormArea {...props} />

FormArea.defaultProps = defaultProps.field
FormArea.propTypes = propTypes.field

export default FormArea
