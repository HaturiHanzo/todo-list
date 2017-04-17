import { createStore, combineReducers } from 'redux';
import todoList from './reducers/todo-list.reducer';

const todoApp = combineReducers({
    todoList
});

export default createStore(todoApp);