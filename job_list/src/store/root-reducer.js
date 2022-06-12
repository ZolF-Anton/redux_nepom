import { combineReducers } from 'redux';
import { positionReducer } from './positions/position-reducers';

export const rootReducer = combineReducers({
    positions: positionReducer,
});
