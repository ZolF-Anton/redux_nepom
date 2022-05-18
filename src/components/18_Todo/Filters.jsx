// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from './filters/filters-actions';
// import { selectActiveFilter } from './filters/filters-selectors';
import { Link, useParams } from 'react-router-dom';
import { filters } from './filters/filters-reducer';

export const Filters = () => {
    // const dispatch = useDispatch();
    // const activeFilter = useSelector(selectActiveFilter);
    const { filterqq: activeFilter = 'all' } = useParams();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link
                to="/all"
                // onClick={() => dispatch(setFilter('all'))}
                style={{
                    width: '76px',
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: activeFilter === 'all' ? 'palegreen' : 'darkolivegreen',
                }}
            >
                all
            </Link>
            <Link
                to="/active"
                // onClick={() => dispatch(setFilter('active'))}
                style={{
                    width: '76px',
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: activeFilter === 'active' ? 'palegreen' : 'darkolivegreen',
                }}
            >
                active
            </Link>
            <Link
                to="/completed"
                //onClick={() => dispatch(setFilter('completed'))}
                style={{
                    width: '76px',
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: activeFilter === 'completed' ? 'palegreen' : 'darkolivegreen',
                }}
            >
                completed
            </Link>
            <Link
                to="/gold"
                //onClick={() => dispatch(setFilter('gold'))}
                style={{
                    width: '76px',
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: activeFilter === 'gold' ? 'darkgoldenrod' : 'darkolivegreen',
                }}
            >
                gold
            </Link>
        </div>
    );
};
