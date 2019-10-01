import { masks } from '@constants/masks'

import { i18n } from '@i18n'

const EMAIL = {
    icon: 'fas fa-envelope',
    maxLength: 255,
    name: 'email',
    placeholder: i18n.t('labels.email'),
    type: 'email',
}

const fields = {
    address: {
        icon: 'fas fa-address-book',
        maxLength: 120,
        name: 'address.address',
        placeholder: i18n.t('labels.address'),
        type: 'string',
    },
    biography: { icon: 'fas fa-id-card-alt', name: 'biography', placeholder: i18n.t('labels.biography'), type: 'textarea' },
    cep: {
        icon: 'fas fa-street-view',
        mask: masks.CEP,
        maxLength: 9,
        name: 'address.cep',
        placeholder: i18n.t('labels.cep'),
        type: 'mask',
    },
    city: { icon: 'fas fa-city', maxLength: 120, name: 'address.city', placeholder: i18n.t('labels.city'), type: 'string' },
    code: { icon: 'fas fa-shield-alt', max: 999999, min: 10000, name: 'code', placeholder: i18n.t('labels.code'), type: 'number' },
    confirmPassword: {
        icon: 'fas fa-lock',
        maxLength: 16,
        name: 'confirmPassword',
        placeholder: i18n.t('labels.confirmPassword'),
        type: 'password',
    },
    country: { icon: 'fas fa-atlas', maxLength: 60, name: 'address.country', placeholder: i18n.t('labels.country'), type: 'string' },
    cpf: { icon: 'fas fa-id-badge', mask: masks.CPF, maxLength: 14, name: 'cpf', placeholder: i18n.t('labels.cpf'), type: 'mask' },
    currentPassword: {
        icon: 'fas fa-lock',
        maxLength: 16,
        name: 'currentPassword',
        placeholder: i18n.t('labels.currentPassword'),
        type: 'password',
    },
    district: {
        icon: 'fas fa-directions',
        maxLength: 60,
        name: 'address.district',
        placeholder: i18n.t('labels.district'),
        type: 'string',
    },
    email: EMAIL,
    emailReadOnly: {
        ...EMAIL,
        readOnly: true,
    },
    name: { icon: 'fas fa-address-card', maxLength: 120, name: 'name', placeholder: i18n.t('labels.fullName'), type: 'text' },
    number: { icon: 'fas fa-road', maxLength: 10, name: 'address.number', placeholder: i18n.t('labels.number'), type: 'string' },
    password: { icon: 'fas fa-lock', maxLength: 16, name: 'password', placeholder: i18n.t('labels.password'), type: 'password' },
    phone: {
        icon: 'fas fa-mobile-alt',
        mask: masks.cellPhone,
        maxLength: 10,
        name: 'phone',
        placeholder: i18n.t('labels.phone'),
        type: 'mask',
    },
    pictureSource: {
        icon: 'fas fa-image',
        maxLength: 255,
        name: 'pictureSource',
        placeholder: i18n.t('labels.pictureSource'),
        type: 'url',
    },
    state: { icon: 'fas fa-arrows-alt', maxLength: 30, name: 'address.state', placeholder: i18n.t('labels.state'), type: 'string' },
}

export { fields }
