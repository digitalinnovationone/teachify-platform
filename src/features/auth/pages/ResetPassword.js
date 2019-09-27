import PropTypes from 'prop-types'
import React from 'react'

import { i18n } from '@i18n'

import { getQueryParams } from '@utils/browser'
import { not } from '@utils/functions'

import { margins } from '@helpers/margins'

import Auth from '@containers/auth'

import Form from '@components/form'
import If from '@components/If'
import Loading from '@components/Loading'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'

import { resetPassword as resetPasswordFields } from '../fields'
import { resetPassword as resetPasswordSchema } from '../schemas'

import bg from '@img/backgrounds/laptop-books-pencil.jpg'

const ResetPassword = ({ dispatchResetPassword, loading }) => {
    const { email } = getQueryParams()
    const handleFormSubmit = values => dispatchResetPassword({ ...values, email })
    return (
        <Auth author={`${i18n.t('labels.designBy')} fullvector / Freepik`} background={bg}>
            <Title>{i18n.t('titles.resetPassword')}</Title>
            <SubTitle>{i18n.t('subtitles.resetPassword')}</SubTitle>
            <If
                condition={not(loading)}
                el={
                    <Margin top={margins.AUTH_HEADER}>
                        <Loading />
                    </Margin>
                }
            >
                <Margin bottom={margins.AUTH_FORM} top={margins.AUTH_HEADER}>
                    <Form
                        fields={resetPasswordFields}
                        onSubmit={handleFormSubmit}
                        schema={resetPasswordSchema}
                        textButton={i18n.t('buttons.updatePassword')}
                    />
                </Margin>
            </If>
        </Auth>
    )
}

ResetPassword.propTypes = {
    dispatchResetPassword: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default ResetPassword
