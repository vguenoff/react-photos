import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCover = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    background-color: ${() =>
        Math.round(Math.random()) ? 'var(--red)' : 'var(--yellow)'};
    margin: 5px 5px 0 0;
    justify-content: flex-end;
    align-items: flex-end;
    &:hover {
        span {
            color: var(--white);
        }
    }

    span {
        color: var(--primary);
        font-size: 24px;
        font-style: italic;
        padding: 5px 10px;

        &:hover {
            color: var(--white);
        }
    }
`

const Cover = ({ id }) => {
    return (
        <Link to={`/albumId/${id}`}>
            <StyledCover>
                <span>{id}</span>
            </StyledCover>
        </Link>
    )
}

export default Cover
