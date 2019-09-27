import { setLocale } from 'yup'

import { i18n } from '@i18n'

setLocale({
    mixed: {
        oneOf: i18n.t('form.validations.oneOf'),
        required: i18n.t('form.validations.required'),
    },
    string: {
        email: i18n.t('form.validations.email'),
        max: i18n.t('form.validations.max'),
        min: i18n.t('form.validations.min'),
    },
})
