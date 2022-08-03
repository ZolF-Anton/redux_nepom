import { createSlice } from '@reduxjs/toolkit';
import { resetToDefaults } from '../Reset/reset-action';
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
export const filterReducer = filterSlice.reducer;
