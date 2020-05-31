import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Favourites from './Favourites'
import Album from './Album'

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
            <Switch>
                <Route path="/albumId/:id">
                    <Album {...{ photosList }} />
                </Route>
                <Route path="/favourites">
                    <Favourites />
                </Route>
                <Route path="/">
                    <Home {...{ photosList }} />
                </Route>
            </Switch>
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
