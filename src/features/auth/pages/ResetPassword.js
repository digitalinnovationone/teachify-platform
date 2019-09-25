import React from 'react'

import { i18n } from '@i18n'

import Auth from '@containers/auth'

import Form from '@components/form'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'

import { resetPassword as resetPasswordFields } from '../fields'
import { resetPassword as resetPasswordSchema } from '../schemas'

import bg from '@img/backgrounds/laptop-books-pencil.jpg'

const ResetPassword = () => {
    const handleFormSubmit = values => console.log(values)
    return (
        <Auth author={`${i18n.t('labels.designBy')} fullvector / Freepik`} background={bg}>
            <Title>{i18n.t('titles.resetPassword')}</Title>
            <SubTitle>{i18n.t('subtitles.resetPassword')}</SubTitle>
            <Margin bottom={1} top={7}>
                <Form
                    fields={resetPasswordFields}
                    onSubmit={handleFormSubmit}
                    schema={resetPasswordSchema}
                    textButton={i18n.t('buttons.updatePassword')}
                />
            </Margin>
        </Auth>
    )
}

export default ResetPassword
