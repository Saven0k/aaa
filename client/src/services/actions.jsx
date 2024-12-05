export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST"
export const CHANGE_POST = "CHANGE_POST"
export const SEARCH_POST = "SEARCH_POST"

export const AddPost = (objectData) => ({
    type: ADD_POST,
    payload: {objectData},
});

export const DeletePost= (id) => ({
    type: DELETE_POST,
    payload: {id},
})
export const ChangePost = (id, name, text) => ({
    type: CHANGE_POST,
    payload: {id, name, text},
})

export const SearchPost = (searchItem) => ({
    type: SEARCH_POST,
    payload: {searchItem},
})
