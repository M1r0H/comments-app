const initialState = {
    status: 0,
    userData: []
}
export default function ActionReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET':
            return {
                ...state,
                userData: payload
            }
        case 'STATUS':
            return {
                ...state,
                status: payload
            }
        default:
            return state;
    }
}
