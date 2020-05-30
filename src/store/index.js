import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers/_rootReducer'

const appliedMiddleware =
    process.env.NODE_ENV === 'production'
        ? applyMiddleware(thunkMiddleware)
        : composeWithDevTools(applyMiddleware(thunkMiddleware))

const configureStore = (initialState = {}) => {
    const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['favourites'],
    }

    const store = createStore(
        persistReducer(persistConfig, rootReducer),
        initialState,
        appliedMiddleware
    )

    const persistor = persistStore(store)

    return { store, persistor }
}

export default configureStore
