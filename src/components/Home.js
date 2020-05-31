import React from 'react'

import Loading from './Loading'
import Cover from './Cover'
import styled from 'styled-components'

const StyledHome = styled.section`
    > p {
        padding: 15px 5px 0 5px;
        border-top: 1px solid var(--primary);
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`

const Home = ({ photosList }) => {
    const photosListUnique = photosList
        .map(photo => photo.albumId)
        // this will filter only the first occurrence of any album id
        .filter((albumId, i, arr) => arr.indexOf(albumId) === i)

    return (
        <StyledHome>
            <p>Select an album from the list.</p>
            <div>
                {photosListUnique.length === 0 ? (
                    <Loading />
                ) : (
                    photosListUnique.map(id => <Cover key={id} {...{ id }} />)
                )}
            </div>
        </StyledHome>
    )
}

export default Home
