import actionTypes from '../ActionTypes';

const addTodo = (data) => ({
    type: actionTypes.ON_CHANGE_OF_TEXT,
    payload:data
})

const addToList = (data) => ({
    type: actionTypes.ON_ADD_TO_LIST,
    payload: data,
})


export default {
    addTodo,
    addToList,
}