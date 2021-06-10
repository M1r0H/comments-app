export const setComment = (value) => {
    return {
        type: 'GET',
        payload: value
    }
}

export const setStatus = (value) => {
    return {
        type: 'STATUS',
        payload: value
    }
}