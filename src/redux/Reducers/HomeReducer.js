import actionTypes from '../ActionTypes';

const initialState = {
    currentTodo: '',
    listOfTodos: []
}

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_CHANGE_OF_TEXT:
            return {
                ...state,
                currentTodo: action.payload,
            }
            break;
        case actionTypes.ON_ADD_TO_LIST:
            return {
                ...state,
                listOfTodos: [ ...state.listOfTodos, action.payload]
            }
        default:
            return state;
            break;
    }
}



export default HomeReducer;