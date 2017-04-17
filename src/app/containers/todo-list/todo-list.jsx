import React from 'react';
import { connect } from 'react-redux';
import {toggleTodo, removeTodo} from '../../redux/action-creators/todo-list.action-creators';
import Todo from '../../components/todo/todo';

let TodoList = ({todos, dispatch}) => {
    const onTodoToggle = (ts) => {
        dispatch(toggleTodo(ts));
    };
    const onTodoRemove = (ts) => {
        dispatch(removeTodo(ts));
    };
    return (
        <div>
            {todos.map(todo =>
                <Todo key={todo.ts}
                      onToggle={onTodoToggle}
                      onRemove={onTodoRemove}
                      todo={todo}>
                </Todo>
            )}
        </div>
    );
};

TodoList = connect(
    (state, ownProps) => {
        return {
            todos: state.todoList.filter(item => item.done === ownProps.isDone)
        };
    }
)(TodoList);

export default TodoList;
