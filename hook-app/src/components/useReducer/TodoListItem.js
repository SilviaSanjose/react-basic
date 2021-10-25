import React from "react";

const TodoListItem = ({ t, index, handleToogle, handleDelete }) => {
    return (
        <div>
            <li className="list-group-item" key={t.id}>
                <p
                    className={`${t.done && "complete"}`}
                    onClick={() => handleToogle(t.id)}
                >
                    {index + 1}. {t.desc}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(t.id)}
                >
                    Borrar
                </button>
            </li>
        </div>
    );
};

export default TodoListItem;
