import { regexs } from '@constants/regexs'

import { number as n, ref, string as s } from 'yup'

import { i18n } from '@i18n'

const address = s()
    .min(1)
    .max(120)
    .label(i18n.t('labels.address'))

const biography = s()
    .min(1)
    .label(i18n.t('labels.biography'))

const categories = s()
    .min(1)
    .max(255)
    .required()
    .label(i18n.t('labels.categories'))

const cep = s()
    .min(9)
    .max(9)
    .matches(regexs.CEP, i18n.t('form.validations.cep'))
    .label(i18n.t('labels.cep'))

const city = s()
    .min(1)
    .max(120)
    .label(i18n.t('labels.city'))

const className = s()
    .min(1)
    .max(30)
    .trim()
    .required()
    .label(i18n.t('labels.name'))

const code = n()
    .min(10000)
    .max(999999)
    .required()
    .label(i18n.t('labels.code'))

const confirmPassword = s()
    .oneOf([ref('password')], i18n.t('form.validations.confirmPassword'))
    .min(8)
    .max(16)
    .trim()
    .required()
    .label(i18n.t('labels.confirmPassword'))

const country = s()
    .min(1)
    .max(60)
    .label(i18n.t('labels.country'))

const courseName = s()
    .min(1)
    .max(120)
    .trim()
    .required()
    .label(i18n.t('labels.name'))

const cpf = s()
    .min(14)
    .max(14)
    .matches(regexs.CPF, i18n.t('form.validations.cpf'))
    .label(i18n.t('labels.cpf'))

const currentPassword = s()
    .min(8)
    .max(16)
    .trim()
    .required()
    .label(i18n.t('labels.currentPassword'))

const describe = s()
    .min(1)
    .label(i18n.t('labels.describe'))

const district = s()
    .min(1)
    .max(60)
    .label(i18n.t('labels.district'))

const email = s()
    .email()
    .min(5)
    .max(255)
    .lowercase()
    .trim()
    .required()
    .label(i18n.t('labels.email'))

const name = s()
    .min(1)
    .max(120)
    .trim()
    .required()
    .label(i18n.t('labels.fullName'))

const number = s()
    .min(1)
    .max(10)
    .label(i18n.t('labels.number'))

const password = s()
    .min(8)
    .max(16)
    .trim()
    .required()
    .label(i18n.t('labels.password'))

const phone = s()
    .min(10)
    .max(10)
    .matches(regexs.cellPhone, i18n.t('form.validations.phone'))
    .label(i18n.t('labels.phone'))

const pictureSource = s()
    .min(1)
    .max(255)
    .url()
    .label(i18n.t('labels.pictureSource'))

const sectionName = s()
    .min(1)
    .max(30)
    .trim()
    .required()
    .label(i18n.t('labels.name'))

const source = s()
    .min(11)
    .max(255)
    .url()
    .required()
    .label(i18n.t('labels.source'))

const state = s()
    .min(1)
    .max(30)
    .label(i18n.t('labels.state'))

const thumbnail = s()
    .min(11)
    .max(255)
    .url()
    .required()
    .label(i18n.t('labels.thumbnail'))

const schemas = {
    address,
    biography,
    categories,
    cep,
    city,
    className,
    code,
    confirmPassword,
    country,
    courseName,
    cpf,
    currentPassword,
    describe,
    district,
    email,
    name,
    number,
    password,
    phone,
    pictureSource,
    sectionName,
    source,
    state,
    thumbnail,
}

export { schemas }
