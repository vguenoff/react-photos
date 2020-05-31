import React from 'react'

import Headline from '../components/Headline'
import AlbumGrid from '../components/AlbumGrid'

const Album = ({ favourites, addToFavourites, removeFromFavourites }) => {
    return (
        <section>
            <Headline text="Favourites list / Add / Remove" />
            <AlbumGrid
                list={favourites}
                {...{ favourites, addToFavourites, removeFromFavourites }}
            />
        </section>
    )
}

export default Album
