import Cleave from 'cleave.js/react'
import React, { useRef } from 'react'
import styled from 'styled-components'

import { defaultProps } from '@helpers/defaultProps'
import { field } from '@helpers/mixins'
import { propTypes } from '@helpers/propTypes'

const StyledFormMask = styled(Cleave)`
    ${field};
`

const FormMask = ({ mask, ...props }) => {
    const cleave = useRef()
    return <StyledFormMask {...props} options={mask} ref={cleave} />
}

FormMask.defaultProps = defaultProps.field
FormMask.propTypes = propTypes.field

export default FormMask
