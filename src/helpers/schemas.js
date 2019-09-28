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

const cep = s()
    .min(9)
    .max(9)
    .matches(regexs.CEP, i18n.t('form.validations.cep'))
    .label(i18n.t('labels.cep'))

const city = s()
    .min(1)
    .max(120)
    .label(i18n.t('labels.city'))

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

const cpf = s()
    .min(14)
    .max(14)
    .matches(regexs.CPF, i18n.t('form.validations.cpf'))
    .label(i18n.t('labels.cpf'))

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

const state = s()
    .min(1)
    .max(30)
    .label(i18n.t('labels.state'))

const schemas = {
    address,
    biography,
    cep,
    city,
    code,
    confirmPassword,
    country,
    cpf,
    district,
    email,
    name,
    number,
    password,
    phone,
    pictureSource,
    state,
}

export { schemas }
