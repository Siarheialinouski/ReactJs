import actionTypes from "./actionTypes";

export const addAuthor = (author) => ({
    type: actionTypes.ADD_AUTHOR,
    payload: author,
});

export const removeAuthor = (id) => ({
    type: actionTypes.REMOVE_AUTHOR,
    payload: id,
});

export const getAllAuthorsSuccess = (authors) => ({
    type: actionTypes.GET_AUTHORS_SUCCESS,
    payload: authors,
});