// import { createStore } from 'redux';

// export const increment = {
//     type: 'INCREMENT',
// };
// export const decrement = {
//     type: 'DECREMENT',
// };
// export const reset = {
//     type: 'RESET',
// };

// const counter = (state = 0, action) => {
//     if (action.type === 'INCREMENT') {
//         return state + 1;
//     }
//     if (action.type === 'DECREMENT') {
//         return state - 1;
//     }
//     if (action.type === 'RESET') {
//         return (state = 0);
//     }
//     return state;
// };

// export const storeClicker = createStore(counter);

///////////////////////////////////////////////////
//////////18___ToDO///////////////////////////////
/////////////////////////////////////////////////
// const todos = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO': {
//             return [
//                 ...state,
//                 {
//                     todoId: Date.now(),
//                     title: action.title,
//                     completed: false,
//                     gold: false,
//                 },
//             ];
//         }

//         case 'REMOVE_TODO': {
//             return state.filter((todo) => todo.todoId !== action.todoId);
//         }
//         case 'TOGGLE_TODO': {
//             return state.map((todo) =>
//                 todo.todoId === action.todoId
//                     ? {
//                           ...todo,
//                           completed: !todo.completed,
//                       }
//                     : todo
//             );
//         }
//         case 'TOGGLE_GOLD': {
//             return state.map((todo) => {
//                 if (todo.todoId === action.todoId) {
//                     return { ...todo, gold: !todo.gold };
//                 } else return todo;
//             });
//         }

//         default: {
//             return state;
//         }
//     }
// };

// const defaultValues = [
//     { todoId: 0, title: 'Hello', completed: false },
//     { todoId: 1, title: 'Hi', completed: false },
//     { todoId: 2, title: 'Ahoy', completed: true },
//     { todoId: 3, title: 'BonJure', completed: false },
//     { todoId: 4, title: 'Chao', completed: false },
// ];

// export const addTodo = (title) => ({
//     type: 'ADD_TODO',
//     title,
// });
// export const removeTodo = (todoId) => ({
//     type: 'REMOVE_TODO',
//     todoId,
// });

// export const toggleTodo = (todoId) => ({
//     type: 'TOGGLE_TODO',
//     todoId,
// });

// export const toggleGold = (todoId) => ({
//     type: 'TOGGLE_GOLD',
//     todoId,
// });

// export const storeTodo = createStore(
//     todos,
//     defaultValues,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
