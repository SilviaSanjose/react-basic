//función reducer

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((todo) => todo.id !== action.payload);
        case "toogle": //forma corta
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case "toogle-old": //forma larga
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                } else {
                    return todo;
                }
            });

        default:
            break;
    }
    return state;
};
