import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            //si el campo (8)sin espacios) esta vacío o con un caracter no añade nada
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddTodo(newTodo);
        reset();
    };
    return (
        <>
            <h4>Agregar</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Que hacer..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button className="btn btn-outline-primary">Añadir</button>
            </form>
        </>
    );
};

export default TodoAdd;
