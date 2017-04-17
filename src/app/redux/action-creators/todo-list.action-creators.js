const addTodo = (text) => {
    return {
        type: 'TODO_ADD',
        ts: Date.now(),
        text
    };
};

const toggleTodo = (ts) => {
    return {
        type: 'TODO_TOGGLE',
        ts
    };
};

const removeTodo = (ts) => {
    return {
        type: 'TODO_REMOVE',
        ts
    };
};

export { addTodo, toggleTodo, removeTodo };