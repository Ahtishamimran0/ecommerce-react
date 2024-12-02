import { combineReducers } from 'redux'
import { productReduce } from './Productreducer'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfiguration = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    productReduce
})

export default persistReducer(persistConfiguration, rootReducer)