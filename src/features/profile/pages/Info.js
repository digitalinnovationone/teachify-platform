import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import { withRouter } from 'react-router'

import { i18n } from '@i18n'

import { not } from '@utils/functions'

import App from '@containers/App'

import Center from '@components/Center'
import Container from '../components/Container'
import Form from '@components/form'
import If from '@components/If'
import Loading from '@components/Loading'
import Margin from '@components/Margin'
import Padding from '@components/Padding'

import { updateAddress as updateAddressFields, updateProfile as updateProfileFields } from '../fields'
import { updateAddress as updateAddressSchema, updateProfile as updateProfileSchema } from '../schemas'

const Info = ({ dispatchGetUser, loading, user, match }) => {
    // useEffect(() => {
    //     const { params } = match
    //     if (params) {
    //         dispatchGetUser({ id: params.id })
    //     }
    // }, [])
    const handleFormSubmit = values => console.log(values)

    return (
        <App>
            <Padding all={3}>
                <If condition={not(loading)} el={<Loading />}>
                    <Center>
                        <Margin bottom={3}>
                            <Container>
                                <Form
                                    fields={updateProfileFields}
                                    initialValues={user}
                                    onSubmit={handleFormSubmit}
                                    schema={updateProfileSchema}
                                    textButton={i18n.t('buttons.updateProfile')}
                                />
                            </Container>
                        </Margin>
                        <Container>
                            <Form
                                fields={updateAddressFields}
                                initialValues={user}
                                onSubmit={handleFormSubmit}
                                schema={updateAddressSchema}
                                textButton={i18n.t('buttons.updateAddress')}
                            />
                        </Container>
                    </Center>
                </If>
            </Padding>
        </App>
    )
}

Info.propTypes = {
    dispatchGetUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default withRouter(Info)
