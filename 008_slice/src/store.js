import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from './feature/Filters/filter-slice';
import { todoReducer } from './feature/Todos/todos-slice';

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    // reducer: todoSlice.reducer,
    //или
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    preloadedState: {
        todos: [
            {
                id: 1,
                title: 'My Redux',
                completed: true,
            },
        ],
    },
    //для дополнительных "усилителей"
    //enhancers: [],
});

export const persistor = persistStore(store);
