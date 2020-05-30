import React from 'react'
import 'normalize.css'
import GlobalStyle from '../GlobalStyle'
import Header from './Header'
import Main from './Main'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
        </>
    )
}

export default App
