import authorsActionTypes from "./actionTypes";

const initialState = [];

const authorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authorsActionTypes.ADD_AUTHOR:
            return [...state, payload];
        case authorsActionTypes.REMOVE_AUTHOR:
            return [...state.filter((author) => author.id !== payload)];
        case authorsActionTypes.GET_AUTHORS_SUCCESS:
            return [...payload];
        default:
            return state;
    }
};

export default authorsReducer;
