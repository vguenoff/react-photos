import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #fff;
        --primaryGray: #eee;
        --secondary: #2a3747;
        --secondaryDark: #011120;
        --red: #d2002e;
        --yellow: #ffcc01;
        --blueLink: #136cb2;
    }

    * {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: var(--secondary);

        &:visited {
            color: var(--secondaryDark);
        }
    }

    header,
    main {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
    }

    main {
        background-color: var(--primaryGray);
    }
`

export default GlobalStyle
