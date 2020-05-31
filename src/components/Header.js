import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledHeader = styled.header`
    h1 {
        font-size: 54px;
        margin: 20px 0;
        padding-bottom: 25px;
        border-bottom: 3px solid var(--yellow);
    }

    ul {
        display: flex;
        flex-direction: row;
        padding: 0;

        li {
            list-style: none;
        }

        a {
            cursor: pointer;
            font-weight: bold;
            margin: 0 40px 5px 4px;
            padding: 10px 0;
            border-bottom: 2px solid transparent;

            &.is-active,
            &:hover {
                border-bottom: 2px solid var(--red);
            }
        }
    }
`

const Header = () => (
    <StyledHeader>
        <NavLink exact to="/">
            <h1>React Photos</h1>
        </NavLink>
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="is-active">
                        Albums List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favourites" activeClassName="is-active">
                        Favourites
                    </NavLink>
                </li>
            </ul>
        </nav>
    </StyledHeader>
)

export default Header
