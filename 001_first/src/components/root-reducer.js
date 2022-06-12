import { combineReducers } from 'redux';
import { todos } from './18_Todo/todo-reducers';
import { counter } from './17_Clicker/click-reducers';
//import { filters } from './18_Todo/filters/filters-reducer';

export const rootReducer = combineReducers({
    //filters,
    todos,
    counter,
});
