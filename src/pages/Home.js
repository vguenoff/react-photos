import React from 'react'

import Headline from '../components/Headline'
import Loading from '../components/Loading'
import HomeGrid from '../components/HomeGrid'

const Home = ({ photosList }) => {
    const photosListUnique = photosList
        .map(photo => photo.albumId)
        // this will filter only the first occurrence of any album id
        .filter((albumId, i, arr) => arr.indexOf(albumId) === i)

    return (
        <>
            <Headline text="Select an album from the list" />
            {photosListUnique.length === 0 ? (
                <Loading />
            ) : (
                <HomeGrid list={photosListUnique} />
            )}
        </>
    )
}

export default Home
