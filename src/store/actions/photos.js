// action creator
export const actions = {
    getPhotos: 'GET_PHOTOS',
    addToFavourites: 'ADD_TO_FAVOURITES',
    removeFromFavourites: 'REMOVE_FROM_FAVOURITES',
}

export const getPhotos = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await res.json()

    return dispatch({
        type: actions.getPhotos,
        payload: photos,
    })
}

export const addToFavourites = movie => dispatch => {
    return dispatch({
        type: actions.addToFavourites,
        payload: movie,
    })
}

export const removeFromFavourites = movie => dispatch => {
    return dispatch({
        type: actions.removeFromFavourites,
        payload: movie,
    })
}
