import { object } from 'yup'

import { schemas } from '@helpers/schemas'

const updateAddress = object().shape({
    address: schemas.address,
    cep: schemas.cep,
    city: schemas.city,
    country: schemas.country,
    district: schemas.district,
    number: schemas.number,
    state: schemas.state,
})

const updatePassword = object().shape({
    confirmPassword: schemas.confirmPassword,
    currentPassword: schemas.currentPassword,
    password: schemas.password,
})

const updateProfile = object().shape({
    biography: schemas.biography,
    cpf: schemas.cpf,
    email: schemas.email,
    name: schemas.name,
    phone: schemas.phone,
    pictureSource: schemas.pictureSource,
})

export { updateAddress, updatePassword, updateProfile }
