import Swal from 'sweetalert2'

import { i18n } from '@i18n'

import { colors } from '@helpers/colors'

const confirm = data =>
    Swal.fire({
        ...data,
        cancelButtonColor: colors.error,
        cancelButtonText: i18n.t('buttons.no'),
        confirmButtonColor: colors.success,
        confirmButtonText: i18n.t('buttons.yes'),
        showCancelButton: true,
        type: 'warning',
    })

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
    confirm,
    error,
    success,
}

export { alerts }
