import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Field } from 'formik'

import { colors } from '@helpers/colors'

const StyledField = styled(Field)`
    background: ${({ invalid }) => (invalid ? '#ffcccc' : colors.background)};
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${({ invalid }) => (invalid ? colors.textError : colors.text)};
    font-size: 1.375rem;
    padding: 1rem 2rem;
    transition: all 0.15s ease-in;
    width: 100%;
    &:focus {
        box-shadow: 0 0 7px rgba(0, 153, 255, 0.75);
        border-color: ${colors.primary};
    }
    &::placeholder {
        color: ${({ invalid }) => (invalid ? colors.error : colors.textLight)};
    }
`

const FormField = props => <StyledField {...props} />

FormField.defaultProps = {
    placeholder: '',
}

FormField.propTypes = {
    invalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
}

export default FormField