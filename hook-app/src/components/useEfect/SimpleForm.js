import React, { useState, useEffect } from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    });
    const { name, email } = formState; //desestructuro para no tener que llamar con formState.name, etc..

    useEffect(() => {
        console.log("hey salta una vez");
    }, []);

    useEffect(() => {
        console.log("formState cambio");
    }, [formState]);

    useEffect(() => {
        console.log("email cambio");
    }, [email]);

    const handleInputChange = ({ target }) => {
        //del evento, me quedo con el target que tiene la información
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };
    return (
        <div>
            <h1>useEffect</h1>
            <div className="form.group my-form">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Introduce 123 para mostrar componente"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <p>Nombre: {name}</p>
            </div>
            <div className="form.group my-form">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Introduce email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <p>Email: {email}</p>
            </div>

            {name === "123" && <Message />}
        </div>
    );
};

export default SimpleForm;
