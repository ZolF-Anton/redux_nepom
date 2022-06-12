export const counter = (state = 0, action) => {
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
