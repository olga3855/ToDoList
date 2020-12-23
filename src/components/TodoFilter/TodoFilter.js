import { useCallback } from 'react';
import {filterChange} from '../../store/actions/todoList';
import { useDispatch} from 'react-redux';


const TodoFilter = () => {
    const dispatch = useDispatch();

    const onFilterChange = useCallback(({target: {value}})=>{
        dispatch(filterChange(value))
    })

    return (
        <div>
            <input type="text" onChange={onFilterChange} />
        </div>
    )
}

export default TodoFilter;

// const mapDispatchToProps = dispatch => {
//     return {
//         onFilterChange: ({target: {value}}) => dispatch(filterChange(value))
//     };
// }