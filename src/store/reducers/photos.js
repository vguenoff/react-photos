import { createReducer } from '@reduxjs/toolkit'
import { actions } from '../actions/photos'

const { getPhotos, addToFavourites, removeFromFavourites } = actions

const photos = createReducer(
    {
        photosList: [],
        favourites: [],
    },
    {
        [getPhotos]: (state, action) => ({
            ...state,
            photosList: action.payload,
        }),
        [addToFavourites]: (state, action) => {
            if (!state.favourites.find(({ id }) => id === action.payload.id)) {
                state.favourites.push(action.payload)
            }
        },
        [removeFromFavourites]: (state, action) => {
            const favourites = state.favourites
            const photo = favourites.find(({ id }) => id === action.payload.id)
            const index = favourites.indexOf(photo)

            if (photo) {
                state.favourites = [
                    ...favourites.slice(0, index),
                    ...favourites.slice(index + 1, favourites.length),
                ]
            }
        },
    }
)

export default photos
