// action creator
export const actions = {
    addToFavourites: 'ADD_TO_FAVOURITES',
    removeFromFavourites: 'REMOVE_FROM_FAVOURITES',
}

export const addToFavourites = photo => dispatch => {
    return dispatch({
        type: actions.addToFavourites,
        payload: photo,
    })
}

export const removeFromFavourites = photo => dispatch => {
    return dispatch({
        type: actions.removeFromFavourites,
        payload: photo,
    })
}
