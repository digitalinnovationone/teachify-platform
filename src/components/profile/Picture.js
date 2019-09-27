import PropTypes from 'prop-types'
import React from 'react'

import Photo from '../Photo'

const Picture = ({ alt, source }) => <Photo alt={alt} source={source} />

Picture.defaultProps = {
    source: '',
}

Picture.propTypes = {
    alt: PropTypes.string.isRequired,
    source: PropTypes.string,
}

export default Picture
