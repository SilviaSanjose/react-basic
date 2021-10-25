import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

import "./todoApp.css";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

//toda la lógica del formulario se saca de este componente al TodoAdd.js

/* const initialState = [
    {
        id: new Date().getTime(),
        desc: "Aprender React",
        done: false,
    },
]; */

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init); //dispacher indica que se debe usar el hook.
    //Init ayuda a React a computar el estado iniciar para que funcione más rápido. Lo que devuelve init será el initialState o state del useReducer

    useEffect(() => {
        //cualquier cambio en todos lo guarda en localstorage
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToogle = (todoId) => {
        dispatch({ type: "toogle", payload: todoId });
    };

    const handleAddTodo = (newTodo) => {
        dispatch({ type: "add", payload: newTodo });
    };

    return (
        <div className="todo">
            <h1>TodoApp</h1>

            <div className="row">
                <div className="col-7">
                    Total Tareas {todos.length}
                    <TodoList
                        todos={todos}
                        handleToogle={handleToogle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
