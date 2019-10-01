import { fields } from '@helpers/fields'

const updateAddress = [fields.cep, fields.address, fields.number, fields.district, fields.city, fields.state, fields.country]

const updatePassword = [fields.currentPassword, fields.password, fields.confirmPassword]

const updateProfile = [fields.name, fields.emailReadOnly, fields.cpf, fields.pictureSource, fields.phone, fields.biography]

export { updateAddress, updatePassword, updateProfile }
