import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    h1 {
        margin: 20px 0;
        padding-bottom: 25px;
        border-bottom: 3px solid var(--yellow);
    }

    ul {
        display: flex;
        flex-direction: row;
        padding: 0;

        li {
            cursor: pointer;
            font-weight: bold;
            list-style: none;
            margin: 0 40px 5px 4px;
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
