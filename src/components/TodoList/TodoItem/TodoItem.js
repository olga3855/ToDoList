import React from 'react';
import { shallowEqual } from 'react-redux';
import './TodoItem.css';

const TodoItem = ({ text, done, id, onDone, onRemove }) => {
    return (
        <li>
            <span className={done ? 'done' : ''}>{text}</span>
            <button onClick={() => onDone(id)}>Done</button>
            <button onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
}

export default React.memo(TodoItem, shallowEqual);
// export default TodoItem;
