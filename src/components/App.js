import React from 'react'
import 'normalize.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../store'

import GlobalStyle from '../GlobalStyle'
import Header from './Header'
import Main from './Main'

const { store, persistor } = configureStore()

const App = () => {
    return (
        <Provider {...{ store }}>
            <PersistGate {...{ persistor }} loading={null}>
                <GlobalStyle />
                <Header />
                <Main />
            </PersistGate>
        </Provider>
    )
}

export default App
