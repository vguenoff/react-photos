import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    getPhotos,
    // addToFavourites,
    // removeFromFavourites,
} from '../store/actions/photos'

const Main = ({ photosList, getPhotos }) => {
    useEffect(() => {
        getPhotos()
    }, [getPhotos])

    return (
        <main>
            <code>
                {photosList?.length > 0
                    ? JSON.stringify(photosList)
                    : 'Loading...'}
            </code>
        </main>
    )
}
export default connect(
    ({ photos }) => ({
        photosList: photos.photosList,
        // favourites: photos.favourites,
    }),
    dispatch =>
        bindActionCreators(
            {
                getPhotos,
                // addToFavourites,
                // removeFromFavourites,
            },
            dispatch
        )
)(Main)
