import { combineReducers } from 'redux';
import { filterReducer } from './filters/filter-reducers';
import { positionReducer } from './positions/position-reducers';

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer,
});
