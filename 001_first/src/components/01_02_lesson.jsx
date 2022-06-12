import './01_02_lesson.css';

import { createStore } from 'redux';

export default function Lesson01() {
    return (
        <div className="Lesson_01">
            <h1>Hello CodeSandbox</h1>
            <h2>!!!!!!!!!!!!!!!!!</h2>
            <h3>!@#$</h3>
            <h3>{console.log(store1.getState())}</h3>
            <div className="button_wrap">
                <button className="btn" onClick={() => store.dispatch(decrement)}>
                    MINUS
                </button>
                <button className="btn" onClick={() => store.dispatch(increment)}>
                    PLUS
                </button>
                <button className="btn" onClick={() => store.dispatch(reset)}>
                    RESET
                </button>
            </div>
        </div>
    );
}

const increment = {
    type: 'INCREMENT',
};
const decrement = {
    type: 'DECREMENT',
};
const reset = {
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

const store = createStore(counter);

// const count = document.querySelector("h2");
// count.innerText = store.getState();

const render = () => {
    document.querySelector('h2').innerText = store.getState();
};

store.subscribe(render);
//////////////////////////////////////////////
/////////////////////NEXT////////////////////
///////////////////////////////////////////
let nextTodoId = 0;

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                {
                    id: ++nextTodoId,
                    title: action.title,
                    completed: false,
                    gold: false,
                },
            ];
        }
        case 'TOGGLE_TODO': {
            return state.map((todo) =>
                todo.id === action.todoId
                    ? {
                          ...todo,
                          completed: !todo.completed,
                      }
                    : todo
            );
        }
        case 'TOGGLE_GOLD': {
            return state.map((todo) => {
                if (todo.id === action.todoId) {
                    return { ...todo, gold: !todo.gold };
                } else return todo;
            });
        }

        default: {
            return state;
        }
    }
};

const defaultValues = [
    { id: 0, title: 'Hello', completed: false },
    { id: 1, title: 'Hi', completed: false },
    { id: 2, title: 'Ahoy', completed: true },
    { id: 3, title: 'BonJure', completed: false },
    { id: 4, title: 'Chao', completed: false },
];

const store1 = createStore(todos, defaultValues);
/////////

// action  creators
const addTodo = (title) => ({
    type: 'ADD_TODO',
    title,
});

const toggleTodo = (todoId) => ({
    type: 'TOGGLE_TODO',
    todoId,
});

const toggleGold = (todoId) => ({
    type: 'TOGGLE_GOLD',
    todoId,
});

store1.dispatch(addTodo('Learn Redux'));

store1.dispatch(addTodo('Learn React& Next JS'));

store1.dispatch(addTodo('Learn LAST'));
store1.dispatch(toggleTodo(1));
store1.dispatch(toggleGold(2));

console.log(store1.getState());
