import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    h1 {
        padding: 10px 0;
        border-bottom: 2px solid var(--yellow);
    }

    ul {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 30px 0;

        li {
            cursor: pointer;
            font-weight: bold;
            list-style: none;
            margin: 5px 40px 5px 3px;
            padding: 10px 0;
            border-bottom: 2px solid transparent;

            &:hover {
                border-bottom: 2px solid var(--red);
            }
        }
    }
`

const Header = () => (
    <StyledHeader>
        <h1>React Photos</h1>
        <nav>
            <ul>
                <li>All Photo Albums</li>
                <li>Favourites</li>
            </ul>
        </nav>
    </StyledHeader>
)

export default Header
