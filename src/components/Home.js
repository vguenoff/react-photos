import React from 'react'
import styled from 'styled-components'

import Loading from './Loading'
import Cover from './Cover'
import Headline from './Headline'

const StyledHome = styled.section`
    > section {
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
            <Headline text="Select an album from the list" />
            <section>
                {photosListUnique.length === 0 ? (
                    <Loading />
                ) : (
                    photosListUnique.map(id => <Cover key={id} {...{ id }} />)
                )}
            </section>
        </StyledHome>
    )
}

export default Home
