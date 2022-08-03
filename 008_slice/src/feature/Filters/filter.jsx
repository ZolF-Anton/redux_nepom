import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './filter-slice';

export const FilterTodo = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.filter);

    return (
        <div>
            <button
                onClick={() => dispatch(setFilter('all'))}
                style={{ color: activeFilter === 'all' ? 'red' : 'black' }}
            >
                all
            </button>
            <button
                onClick={() => dispatch(setFilter('active'))}
                style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
            >
                active
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))}
                style={{ color: activeFilter === 'completed' ? 'red' : 'black' }}
            >
                completed
            </button>
        </div>
    );
};
