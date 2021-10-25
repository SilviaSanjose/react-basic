import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleToogle, handleDelete }) => {
    return (
        <ul>
            {todos.map((t, index) => (
                <TodoListItem
                    key={t.id}
                    t={t}
                    index={index}
                    handleToogle={handleToogle}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default TodoList;
