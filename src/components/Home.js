import React from 'react'

import Loading from './Loading'

const Home = ({ photosList }) => {
    return (
        <>
            <code>
                {photosList?.length > 0 ? (
                    JSON.stringify(photosList)
                ) : (
                    <Loading />
                )}
            </code>
        </>
    )
}

export default Home
