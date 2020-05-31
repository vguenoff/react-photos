import fetch from 'isomorphic-unfetch'

// action creator
export const actions = {
    getPhotos: 'GET_PHOTOS',
}

export const getPhotos = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await res.json()

    return dispatch({
        type: actions.getPhotos,
        payload: photos,
    })
}
