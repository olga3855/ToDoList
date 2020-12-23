import {
    ADD_CASE,
    SET_CASE_DONE,
    REMOVE_CASE,
    TODO_CHOOSE,
    CHANGE_FILTER
} from '../../constants/actions';

export const createTodo = text => ({type: ADD_CASE, payload: text});

export const changeDone = id => ({type: SET_CASE_DONE, payload: id});
export const removeCase = id => ({type: REMOVE_CASE, payload: id});
export const changeChoiser = type => ({type: TODO_CHOOSE, payload: type});
export const filterChange = text => ({type: CHANGE_FILTER, payload: text});