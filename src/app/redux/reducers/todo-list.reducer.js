import todo from './todo.reducer'

const todoList = (state = [], action = {}) => {
    switch (action.type) {
        case 'TODO_ADD': {
            return [
                ...state,
                todo(undefined, action)
            ]
        }
        case 'TODO_TOGGLE': {
            return state.map(t => todo(t, action));
        }
        case 'TODO_REMOVE': {
            return state.filter(t => t.ts !== action.ts);
        }
        default: {
            return state;
        }
    }
};

export default todoList;
