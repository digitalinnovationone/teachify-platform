import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFormGroup = styled.div`
    margin-bottom: 2rem;
`

const FormGroup = ({ children }) => <StyledFormGroup>{children}</StyledFormGroup>

FormGroup.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default FormGroup
