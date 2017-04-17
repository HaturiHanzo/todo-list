import React from 'react';
import './todo.css';

const formatDate = (ts) => {
    let date = new Date(ts);
    return `${date.getDate()}/${date.getMonth()}`;
};

const Todo = ({todo, onToggle, onRemove}) => {
    return (
        <div>
            <span>{formatDate(todo.ts)}</span>
            <span className="todo-text">{todo.text}</span>
            <button onClick={onToggle.bind(null, todo.ts)}>toggle</button>
            <button onClick={onRemove.bind(null, todo.ts)}>remove</button>
        </div>
    );
};

export default Todo;
