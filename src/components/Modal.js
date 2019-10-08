import PropTypes from 'prop-types'
import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

const Modal = ({ children, show }) => <ReactModal isOpen={show}>{children}</ReactModal>

Modal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    show: PropTypes.bool.isRequired,
}

export default Modal
