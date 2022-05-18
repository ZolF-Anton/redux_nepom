import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Filters } from './Filters';
import { selectActiveFilter } from './filters/filters-selectors';
import { addTodo, removeTodo, toggleGold, toggleTodo } from './todo-actions';
import { selectAllTodo, selectActiveTodo, selectVisibleTodos } from './todo-selectors';

import './todo.css';

const Todo = () => {
    const toDoz = useSelector(selectAllTodo);
    const dispatch = useDispatch();

    const onBtnClick = (responceLable, event) => {
        switch (responceLable) {
            case 'ADD_TODO': {
                dispatch(
                    addTodo(
                        event.nativeEvent.path[2].childNodes[1].childNodes[0].childNodes[0].value
                    )
                );
                return console.log(event.nativeEvent.path[0], 'Todo.jsx', toDoz);
            }
            case 'REMOVE_TODO': {
                dispatch(removeTodo(toDoz));
                return console.log(event.nativeEvent.path[0], 'Todo.jsx', toDoz);
            }
            case 'TOGGLE_TODO': {
                console.log(event.nativeEvent.path[0], 'Todo.jsx', toDoz[0].todoId, toDoz);
                return toDoz.map((todo) => {
                    return dispatch(toggleTodo(todo.todoId));
                });
            }
            case 'TOGGLE_GOLD': {
                return toDoz.map((todo) => {
                    if (todo.completed === true) {
                        dispatch(toggleGold(todo.todoId));
                        return console.log(todo);
                    } else return todo;
                });
            }

            default:
                break;
        }
    };

    return (
        <>
            <h2>TODO</h2>
            <div className="components_wrap">
                <NewTodo />
                <TodoList />
                <Filters />
            </div>
            <div className="button_wrap">
                <button className="btn" onClick={(e) => onBtnClick('ADD_TODO', e)}>
                    Add Todo
                </button>
                <button className="btn" onClick={(e) => onBtnClick('TOGGLE_TODO', e)}>
                    Toggle Complite
                </button>
                <button className="btn" onClick={(e) => onBtnClick('TOGGLE_GOLD', e)}>
                    GOLD
                </button>
            </div>
        </>
    );
};
export default Todo;

const NewTodo = (props) => {
    //const { dispatch } = props;
    const dispatch = useDispatch();
    const onBtnSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        console.log('NewTodo:', event, event.target[0].value, event.target.title.value);
        //event.target.reset();
    };
    return (
        <form onSubmit={onBtnSubmit}>
            <input className="inpText" type="text" name="title" placeholder="new todo" />
            <input className="btn" type="submit" value="Add todo" />
        </form>
    );
};

const TodoList = () => {
    const dispatch = useDispatch();
    //const activeFilter = useSelector(selectActiveFilter);
    const { filterqq } = useParams();
    const todos = useSelector((state) => selectVisibleTodos(state, filterqq));
    const todoAll = useSelector(selectAllTodo);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.todoId}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.todoId))}
                    />
                    <button
                        className="btn"
                        onClick={() => dispatch(removeTodo(todo.todoId))}
                        style={{
                            backgroundColor: todoAll.gold === false ? 'gold' : 'darkgreen',
                        }}
                    >
                        Delete
                    </button>
                    {'  '}
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};
