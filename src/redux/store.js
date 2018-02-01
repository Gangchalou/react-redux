import {createStore} from 'redux'
import {counter} from './reducers'
import  {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(counter)
export default store