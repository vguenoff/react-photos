import React from 'react'
import styled from 'styled-components'

const StyledAlbumGrid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    li {
        position: relative;
        list-style: none;
        border: 2px solid var(--white);
        width: 180px;

        .icon {
            position: absolute;
            cursor: pointer;
            top: 8px;
            right: 8px;
            color: var(--red);

            i {
                color: var(--red);
                font-size: 24px;
                padding: 5px;

                :hover {
                    color: var(--primary);
                }
            }
        }

        img {
            display: block;
            width: 180px;
            height: 180px;
            background-color: var(--yellow);
        }

        p {
            margin: 5px 0;
            padding: 0 2px;
        }
    }
`

const AlbumGrid = ({
    list,
    favourites,
    addToFavourites,
    removeFromFavourites,
}) => {
    return (
        <StyledAlbumGrid>
            {list.map(photo => {
                const addedToFavourites = favourites.find(
                    ({ id }) => id === photo.id
                )

                return (
                    <li key={photo.id}>
                        <img src={photo.url} alt={photo.title} />
                        <p>{photo.title}</p>
                        <div className="icon">
                            <i
                                className={`${
                                    addedToFavourites ? 'fas' : 'far'
                                } fa-heart`}
                                onClick={() =>
                                    !addedToFavourites
                                        ? addToFavourites(photo)
                                        : removeFromFavourites(photo)
                                }
                            />
                        </div>
                    </li>
                )
            })}
        </StyledAlbumGrid>
    )
}

export default AlbumGrid
