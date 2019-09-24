import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
    padding: 0 5rem;
    text-align: center;
`

const Form = ({ children }) => <StyledForm>{children}</StyledForm>

Form.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default Form
