import React from 'react';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import TodoChoiser from './components/TodoChoiser/TodoChoiser';
import TodoFilter from './components/TodoFilter/TodoFilter';

function App() {


    return (
        <>
            <h1>My TODO list</h1>
            <TodoFilter />
            <TodoChoiser />
            <AddTodo />
            <TodoList />

        </>
    );
};

export default App;