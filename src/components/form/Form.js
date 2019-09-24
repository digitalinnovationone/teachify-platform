import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Formik, Form as FormikForm } from 'formik'

import Button from '../Button'
import FormError from './FormError'
import FormField from './FormField'
import FormGroup from './FormGroup'

const StyledForm = styled(FormikForm)`
    margin: 2rem 0;
`

const Form = ({ fields, initialValues, onSubmit, schema, textButton }) => {
    const handleSubmit = (checkErrors, cb, values) =>
        checkErrors().then(errors => {
            const formErrors = Object.keys(errors)
            if (formErrors.length) {
                formErrors.forEach(error => cb(error))
            } else {
                onSubmit(values)
            }
        })
    return (
        <Formik initialValues={initialValues} validationSchema={schema}>
            {({ errors, setFieldTouched, touched, validateForm, values }) => (
                <StyledForm>
                    {fields.map(field => (
                        <FormGroup key={field.name}>
                            <FormField {...field} invalid={!!errors[field.name] && !!touched[field.name]} />
                            <FormError name={field.name} />
                        </FormGroup>
                    ))}
                    <Button onClick={() => handleSubmit(validateForm, setFieldTouched, values)} type="button">
                        {textButton}
                    </Button>
                </StyledForm>
            )}
        </Formik>
    )
}

Form.defaultProps = {
    initialValues: {},
}

Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    schema: PropTypes.object.isRequired,
    textButton: PropTypes.string.isRequired,
}

export default Form
