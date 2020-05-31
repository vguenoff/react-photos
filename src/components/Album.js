import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const StyledAlbum = styled.section`
    > p {
        padding: 15px 5px 0 5px;
        border-top: 1px solid var(--primary);
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        li {
            list-style: none;
            border: 2px solid var(--white);
            width: 180px;

            img {
                width: 100%;
                height: auto;
            }

            p {
                margin: 5px 0;
            }
        }
    }
`

const Album = ({ photosList }) => {
    const { id } = useParams()
    const photoAlbum = photosList.filter(photo => photo.albumId === Number(id))
    return (
        <StyledAlbum>
            <p>Album Id: {id}</p>
            <ul>
                {photoAlbum.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.url} alt={photo.title} />
                        <p>{photo.title}</p>
                    </li>
                ))}
            </ul>
        </StyledAlbum>
    )
}

export default Album
