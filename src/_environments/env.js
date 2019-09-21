import { deepFreeze } from '@utils/object'

const config = () => ({
    api: {
        url: 'https://us-central1-teachify-platform.cloudfunctions.net',
    },
    app: {
        environment: null,
        namespace: 'teachify-platform',
    },
})

deepFreeze(config)

export { config }
