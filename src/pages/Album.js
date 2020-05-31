import React from 'react'
import { useParams } from 'react-router-dom'

import Headline from '../components/Headline'
import AlbumGrid from '../components/AlbumGrid'

const Album = ({
    photosList,
    favourites,
    addToFavourites,
    removeFromFavourites,
}) => {
    const { id } = useParams()
    const photoAlbum = photosList.filter(photo => photo.albumId === Number(id))

    return (
        <section>
            <Headline text={`${id} / Add and remove favourites`} />

            <AlbumGrid
                list={photoAlbum}
                {...{ favourites, addToFavourites, removeFromFavourites }}
            />
        </section>
    )
}

export default Album
