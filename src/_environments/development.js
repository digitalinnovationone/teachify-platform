import { environments } from '@constants/environments'

import { deepFreeze } from '@utils/object'

import { config as envConfig } from './env'

const config = { ...envConfig() }

config.app.environment = environments.development

deepFreeze(config)

export { config }
