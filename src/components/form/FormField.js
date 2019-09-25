import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Field } from 'formik'

import { colors } from '@helpers/colors'
import { inputFocus } from '@helpers/mixins'

const StyledField = styled(Field)`
    background: ${({ invalid }) => (invalid ? colors.errorLight : colors.background)};
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${({ invalid }) => (invalid ? colors.textError : colors.text)};
    font-size: 1.375rem;
    padding: 1rem ${({ icon }) => (icon ? 4 : 2)}rem;
    transition: all 0.15s ease-in;
    width: 100%;
    ${inputFocus};
    &::placeholder {
        color: ${({ invalid }) => (invalid ? colors.error : colors.textLight)};
    }
`

const FormField = props => <StyledField {...props} />

FormField.defaultProps = {
    icon: '',
    maxLength: 0,
    placeholder: '',
}

FormField.propTypes = {
    icon: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
}

export default FormField
