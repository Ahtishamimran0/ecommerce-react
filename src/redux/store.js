import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { thunk } from "redux-thunk"
import persistStore from "redux-persist/es/persistStore"
import rootReducer from './Productroot'

export const store = createStore(rootReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)