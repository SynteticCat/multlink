import React from 'react';
import Context from './context';
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';

function App() {
    const [ todos, setTodos ] = React.useState([
        { id: 1, completed: false, title: 'Купить зерновой хлеб' },
        { id: 2, completed: false, title: 'Описать имущество гражданина' },
        { id: 3, completed: false, title: 'Разбежавшись, прыгнуть в воду' }
    ]);

    function onToggle(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo; 
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(
            todos.concat({
                title,
                id: Date.now(),
                completed: false
            })
        )
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='wrapper'>
                <h1>Todo List</h1>
                <AddTodo onCreate={addTodo}/>
                { todos.length  ? (
                    <TodoList 
                        todos = { todos }
                        onToggle = { onToggle }
                    />
                ) : (
                    <p>No todos</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;