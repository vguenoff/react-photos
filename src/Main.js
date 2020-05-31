import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Album from './pages/Album'

import { getPhotos } from './store/actions/photos'

import {
    addToFavourites,
    removeFromFavourites,
} from './store/actions/favourites'

const Main = ({
    photosList,
    getPhotos,
    favourites,
    addToFavourites,
    removeFromFavourites,
}) => {
    useEffect(() => {
        getPhotos()
    }, [getPhotos])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home {...{ photosList }} />
                </Route>
                <Route path="/albumId/:id">
                    <Album
                        {...{
                            photosList,
                            favourites,
                            addToFavourites,
                            removeFromFavourites,
                        }}
                    />
                </Route>
                <Route path="/favourites">
                    <Favourites
                        {...{
                            favourites,
                            addToFavourites,
                            removeFromFavourites,
                        }}
                    />
                </Route>
            </Switch>
        </main>
    )
}
export default connect(
    ({ photos, favourites }) => ({
        photosList: photos.photosList,
        favourites: favourites.favouritesList,
    }),
    dispatch =>
        bindActionCreators(
            {
                getPhotos,
                addToFavourites,
                removeFromFavourites,
            },
            dispatch
        )
)(Main)
