import Swal from 'sweetalert2'

const error = data =>
    Swal.fire({
        ...data,
        type: 'error',
    })

const success = data =>
    Swal.fire({
        ...data,
        type: 'success',
    })

const alerts = {
    error,
    success,
}

export { alerts }
