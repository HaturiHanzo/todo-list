const todo = (state, action) => {
    switch (action.type) {
        case 'TODO_ADD': {
            return {
                ts: action.ts,
                text: action.text,
                done: false
            };
        }
        case 'TODO_TOGGLE': {
            if (state.ts !== action.ts) {
                return state;
            }

            let result = Object.assign({}, state);
            result.done = !state.done;

            return result;
        }
        default: {
            return state;
        }
    }
};

export default todo;