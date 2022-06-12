export const addTodo = (title) => ({
    type: 'ADD_TODO',
    title,
});
export const removeTodo = (todoId) => ({
    type: 'REMOVE_TODO',
    todoId,
});

export const toggleTodo = (todoId) => ({
    type: 'TOGGLE_TODO',
    todoId,
});

export const toggleGold = (todoId) => ({
    type: 'TOGGLE_GOLD',
    todoId,
});
