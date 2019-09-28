import { fields } from '@helpers/fields'

const updateAddress = [fields.cep, fields.address, fields.number, fields.district, fields.city, fields.state, fields.country]

const updateProfile = [fields.name, fields.email, fields.cpf, fields.pictureSource, fields.phone, fields.biography]

export { updateAddress, updateProfile }
