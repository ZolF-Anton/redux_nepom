import React from 'react';
import { createStore } from 'redux';

export const increment = {
    type: 'INCREMENT',
};
export const decrement = {
    type: 'DECREMENT',
};
export const reset = {
    type: 'RESET',
};

const counter = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    if (action.type === 'DECREMENT') {
        return state - 1;
    }
    if (action.type === 'RESET') {
        return (state = 0);
    }
    return state;
};

export const storeClicker = createStore(counter);
