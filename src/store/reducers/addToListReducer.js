import {
    ADD_CASE,
    SET_CASE_DONE,
    REMOVE_CASE,
    TODO_CHOOSE,
    CHANGE_FILTER
} from '../../constants/actions';

const defaultState = {
    todos: [],
    chosen: 'all',
    filterText: ''

}

const addTodoListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASE:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, done: false, id: Math.random() }]
            }
        case SET_CASE_DONE:
            return {
                ...state,
                todos: state.todos.map(item => item.id === action.payload ? { ...item, done: !item.done } : { ...item })
            }
        case REMOVE_CASE:
            return {
                ...state,
                todos: state.todos.filter(({ id }) => id !== action.payload)
            }
        case TODO_CHOOSE:
            return {
                ...state,
                chosen: action.payload
            }
        case CHANGE_FILTER:
            return {
                ...state,
                filterText: action.payload

            }

        default: return state;
    }
}
export default addTodoListReducer;