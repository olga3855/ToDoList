import { createSelector } from 'reselect';

const getFilterText = (state) => state.filterText;
const getChosen = (state) => state.chosen;
const getTodos = (state) => state.todos;

// const getDataFromStore = createSelector([getChosen, getFilterText],
//     (filterText, chosen) => {
//         return filterText + ' ' + chosen;
//     }
// );

export const getFilteredTodo = createSelector(
    [getChosen, getFilterText, getTodos],
    (chosen, filterText, todos) => {
        let filteredTodos = todos;

        if (chosen === 'done') {
            filteredTodos = filteredTodos.filter(todo => todo.done)
        } else if (chosen === 'not-done') {
            filteredTodos = filteredTodos.filter(todo => !todo.done)
        }

        filteredTodos = filteredTodos.filter(({ text }) => text.toLowerCase().includes(filterText.toLowerCase()))
        return filteredTodos;
    })