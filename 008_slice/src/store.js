import { createStore } from 'redux';
import { nanoid, createSlice, configureStore, createAction } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const resetToDefaults = createAction('root/reset-app');

const todoSlice = createSlice({
    name: '@@todos',
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title) => ({
                payload: {
                    title,
                    id: nanoid(),
                    completed: false,
                },
            }),
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            return state.filter((todo) => todo.id !== id);
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.find((todo) => todo.id === id);
            todo.completed = !todo.completed;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetToDefaults, (state, action) => {
            return [];
        });
    },
});

const filterSlice = createSlice({
    name: '@@filter',
    initialState: 'all',
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetToDefaults, (state, action) => {
            return 'all';
        });
    },
});
export const { setFilter } = filterSlice.actions;
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const store = configureStore({
    // reducer: todoSlice.reducer,
    //или
    reducer: {
        todos: todoSlice.reducer,
        filter: filterSlice.reducer,
    },
    devTools: true,
    //middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(logger),
    middleware: (getDefaultMiddlware) => [...getDefaultMiddlware(), logger],
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

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all': {
            return state.todos;
        }
        case 'active': {
            return state.todos.filter((todo) => !todo.completed);
        }
        case 'completed': {
            return state.todos.filter((todo) => todo.completed);
        }
        default: {
            return state.todos;
        }
    }
};
