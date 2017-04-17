import React from 'react';
import TodoForm from './containers/todo-form/todo-form.container';
import TodoList from './containers/todo-list/todo-list';

import './todo-app.css';

const App = () => {
  return (
    <div>
        <TodoForm />
        <div className="todos-container">
            <p>Unfinished todos</p>
            <TodoList isDone={false}/>
        </div>
        <div className="todos-container">
            <p>Finished todos</p>
            <TodoList isDone={true}/>
        </div>
    </div>
  )
};

export default App;
