import React from 'react'

import { routes } from '@routes'

import { i18n } from '@i18n'

import Auth from '@containers/auth'

import Form from '@components/form'
import Link from '@components/Link'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'

import { signUp as signUpFields } from '../fields'
import { signUp as signUpSchema } from '../schemas'

import bg from '@img/backgrounds/person-sit-books.jpg'

const SignUp = () => {
    const handleFormSubmit = values => console.log(values)
    return (
        <Auth author={`${i18n.t('labels.designBy')} fullvector / Freepi`} background={bg}>
            <Title>{i18n.t('titles.signUp')}</Title>
            <SubTitle>{i18n.t('subtitles.signUp')}</SubTitle>
            <Margin bottom={1} top={7}>
                <Form
                    fields={signUpFields}
                    onSubmit={handleFormSubmit}
                    schema={signUpSchema}
                    textButton={i18n.t('buttons.createAccount')}
                />
            </Margin>
            <Link lower primary to={routes.signIn}>
                {i18n.t('labels.orSignIn')}
            </Link>
        </Auth>
    )
}

export default SignUp
