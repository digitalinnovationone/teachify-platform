import { inputTypes } from '@constants/inputTypes'

import PropTypes from 'prop-types'
import React from 'react'

import { Field } from 'formik'

import FormArea from './FormArea'
import FormCheck from './FormCheck'
import FormInput from './FormInput'
import FormMask from './FormMask'

const FormField = props => (
    <Field
        {...props}
        render={({ field }) => {
            if (props.type === inputTypes.TEXTAREA) {
                return <FormArea {...field} {...props} />
            }
            if (props.type === inputTypes.MASK) {
                return <FormMask {...field} {...props} />
            }
            if (props.type === inputTypes.CHECK) {
                return <FormCheck {...field} {...props} />
            }
            return <FormInput {...field} {...props} />
        }}
    />
)

FormField.defaultProps = {
    icon: '',
    maxLength: null,
    placeholder: '',
    value: '',
}

FormField.propTypes = {
    icon: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
}

export default FormField
