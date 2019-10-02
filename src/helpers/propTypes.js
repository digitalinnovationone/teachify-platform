import PropTypes from 'prop-types'

const field = {
    icon: PropTypes.string.isRequired,
    invalid: PropTypes.bool.isRequired,
    mask: PropTypes.object,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
}

const propTypes = {
    field,
}

export { propTypes }
