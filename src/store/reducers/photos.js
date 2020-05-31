import { createReducer } from '@reduxjs/toolkit'
import { actions } from '../actions/photos'

const { getPhotos } = actions

const photos = createReducer(
    {
        photosList: [],
    },
    {
        [getPhotos]: (state, action) => ({
            ...state,
            photosList: action.payload,
        }),
    }
)

export default photos
