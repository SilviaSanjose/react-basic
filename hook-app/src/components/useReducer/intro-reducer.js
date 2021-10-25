const initialState = [
    {
        id: 1,
        todo: "comprar pan",
        done: false,
    },
];

const todoReducer = (state = initialState, action) => {
    if (action?.type === "agregar") {
        return [...state, action.payload];
    }
    return state;
};

//añado primer valor a mi variable de tareas
let todos = todoReducer();

const newTodo = {
    //nueva tarea
    id: 2,
    todo: "comprar leche",
    done: false,
};

//acción para añadir nueva tarea
const addAction = {
    type: "agregar", //tipo de acción, es un estandar poner type para luego poder buscarlas
    payload: newTodo, //los argumentos, se suele poner payload o se puede poner cualquier otro nombre: newTodo
};

todos = todoReducer(todos, addAction);

console.log(todos);
