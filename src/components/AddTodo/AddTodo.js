import { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../store/actions/todoList';


const AddTodo = ({ addItem }) => {

    const [title, setTitle] = useState('');

    const handleTitleChange = ({ target: { value } }) => {
        setTitle(value);
    };


    const onItemAdd = () => {
        addItem(title);
        setTitle('')
    }

    return (<>
        <div>
            <input type='text' value={title} onChange={handleTitleChange} ></input>
            <button onClick={onItemAdd}>Add</button>
        </div>
    </>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (text) => dispatch(createTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);