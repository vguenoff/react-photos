import { combineReducers } from 'redux'

import photos from './photos'
import favourites from './favourites'

const rootReducer = combineReducers({
    photos,
    favourites,
})

export default rootReducer
