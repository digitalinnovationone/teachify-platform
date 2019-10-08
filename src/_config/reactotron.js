import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const reactotron = Reactotron.configure({
    name: 'TPT - Platform',
})
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()

console.tron = Reactotron

export { reactotron }
