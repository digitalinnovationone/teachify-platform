import { ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFormError = styled(ErrorMessage)`
    color: ${({ theme }) => theme.colors.error};
    display: block;
    padding-left: 0.5rem;
    padding-top: 0.25rem;
    text-align: left;
`

const FormError = ({ name }) => <StyledFormError component="span" name={name} />

FormError.propTypes = {
    name: PropTypes.string.isRequired,
}

export default FormError
