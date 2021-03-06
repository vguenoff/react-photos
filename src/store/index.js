import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/_rootReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favourites'],
}

const configureStore = (initialState = {}) => {
    const store = createStore(
        persistReducer(persistConfig, rootReducer),
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

    const persistor = persistStore(store)

    return { store, persistor }
}

export default configureStore
