import { ResetApp } from './feature/Reset/ResetApp';
import { FilterTodo } from './feature/Filters/filter';
import { NewTodo } from './feature/Todos/NewTodo';
import { TodoList } from './feature/Todos/TodoList';

export default function App() {
    return (
        <div className='App'>
            <h1>Hello Redux Todo</h1>
            <NewTodo />
            <FilterTodo />
            <TodoList />
            <ResetApp />
        </div>
    );
}
