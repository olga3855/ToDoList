import { useCallback} from 'react';
import TodoItem from './TodoItem/TodoItem';
import { changeDone, removeCase } from '../../store/actions/todoList';
import { useDispatch, useSelector } from 'react-redux';
import {getFilteredTodo} from '../../store/selectors/getFilteredTodo';


const TodoList = () => {
    const dispatch = useDispatch()

    // const todos = useSelector(state => state.todos);
    // const filterText = useSelector(state => state.filterText);
    // const chosen = useSelector(state => state.chosen);

    // const [casesToShow, setCasesToShow] = useState(todos);

    // const reduxData = useSelector(getDataFromStore);

    const filteredTodos = useSelector(getFilteredTodo);

    const onDone = useCallback((id) => {
        dispatch(changeDone(id))
    }, [])

    const onRemove = useCallback((id) => {
        dispatch(removeCase(id))
    }, [])

    return (
        <>
            {/* <div>{reduxData}</div> */}
            <ul>
                {filteredTodos.map(({ text, id, done }) =>
                
                    <TodoItem
                        text={text}
                        key={id}
                        done={done}
                        id={id}
                        onDone={onDone}
                        onRemove={onRemove}
                    />)}
            </ul>
        </>
    )
};

export default TodoList;

// const mapStateToProps = ({ todos, chosen, filterText }) => ({ todos, chosen, filterText });

// const mapDispatchToProps = dispatch => ({
//     onDone: id => dispatch(changeDone(id)),
//     onRemove: id => dispatch(removeCase(id))
// })