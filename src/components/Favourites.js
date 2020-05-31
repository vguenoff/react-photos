import React from 'react'

import Headline from './Headline'
import AlbumGrid from './AlbumGrid'

const Album = ({ favourites, addToFavourites, removeFromFavourites }) => {
    return (
        <section>
            <Headline text="Favourites list / Remove if needed" />
            <AlbumGrid
                list={favourites}
                {...{ favourites, addToFavourites, removeFromFavourites }}
            />
        </section>
    )
}

export default Album
