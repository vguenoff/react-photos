import { createReducer } from '@reduxjs/toolkit'
import { actions } from '../actions/favourites'

const { addToFavourites, removeFromFavourites } = actions

const favourites = createReducer(
    {
        favouritesList: [],
    },
    {
        [addToFavourites]: (state, action) => {
            if (
                !state.favouritesList.find(({ id }) => id === action.payload.id)
            ) {
                state.favouritesList.push(action.payload)
            }
        },
        [removeFromFavourites]: (state, action) => {
            const favourites = state.favouritesList

            state.favouritesList = favourites.filter(
                photo => photo.id !== action.payload.id
            )
        },
    }
)

export default favourites
