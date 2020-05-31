import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'
import configureStore from './store'
import Header from './components/Header'
import Main from './Main'

const { store, persistor } = configureStore()

ReactDOM.render(
    <React.StrictMode>
        <Provider {...{ store }}>
            <PersistGate {...{ persistor }} loading={null}>
                <GlobalStyle />
                <Router>
                    <Header />
                    <Main />
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
