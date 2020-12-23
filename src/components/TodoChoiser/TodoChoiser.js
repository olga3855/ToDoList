import { useCallback } from 'react';
import {changeChoiser} from '../../store/actions/todoList';
import { useDispatch} from 'react-redux';


const TodoChoiser = () => {
    const dispatch = useDispatch();

    const onChoiserClick = useCallback((type)=>{
        dispatch(changeChoiser(type))
    })
    return (
        <div>
            <button onClick={()=>onChoiserClick('done')}>Done</button>
            <button onClick={()=>onChoiserClick('not-done')}>Not done</button>
            <button onClick={()=>onChoiserClick('all')}>All</button>
        </div>
        )
}

export default TodoChoiser;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onChoiserClick: (type) => dispatch(changeChoiser(type))
//     }
// }