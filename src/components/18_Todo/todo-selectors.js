export const selectAllTodo = (state) => state.todos;

export const selectActiveTodo = (state) => state.todos.filter((todo) => todo.completed === false);
export const selectGoldTodo = (state) => state.todos.filter((todo) => todo.gold === true);

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
        case 'gold': {
            return state.todos.filter((todo) => todo.gold === true);
        }

        default: {
            return state.todos;
        }
    }
};
