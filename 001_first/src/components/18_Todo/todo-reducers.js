export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                {
                    todoId: Date.now(),
                    title: action.title,
                    completed: false,
                    gold: false,
                },
            ];
        }
        case 'REMOVE_TODO': {
            return state.filter((todo) => todo.todoId !== action.todoId);
        }
        case 'TOGGLE_TODO': {
            return state.map((todo) =>
                todo.todoId === action.todoId
                    ? {
                          ...todo,
                          completed: !todo.completed,
                      }
                    : todo
            );
        }
        case 'TOGGLE_GOLD': {
            return state.map((todo) => {
                if (todo.todoId === action.todoId) {
                    return { ...todo, gold: !todo.gold };
                } else return todo;
            });
        }
        default: {
            return state;
        }
    }
};
