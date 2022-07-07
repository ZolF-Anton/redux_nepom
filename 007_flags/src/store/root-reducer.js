import { combineReducers, createStore } from 'redux';
import { countriesReducer } from './countries/countries-reducer';
import { controlsReducer } from './controls/controls-reducer';
import { themeReducer } from './theme/theme-reducer';
import { detailReducer } from './details/details-reducer';

export const rootReducer = combineReducers({
    themeRR: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailReducer,
});
