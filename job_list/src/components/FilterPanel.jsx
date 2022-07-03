import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);

    if (currentFilters.length === 0) {
        return null;
    }

    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {currentFilters.map((filter) => (
                        <Badge
                            onClear={() => dispatch(removeFilter(filter))}
                            key={filter}
                            variant='clearable'
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button onClick={() => dispatch(clearFilter)} className='link'>
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
