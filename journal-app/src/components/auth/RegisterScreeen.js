import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";

const RegisterScreeen = () => {
    const initialForm = {
        name: "Silvia",
        email: "silvia@gmail.com",
        password: "123456",
        password2: "123456",
    };

    const [formValues, handleInputChange] = useForm(initialForm);
    const { name, email, password, password2 } = formValues;

    const dispatch = useDispatch();

    //useSelector obtiene el state del store del navegadir directamente
    //const state = useSelector((state) => state.ui);
    const { msgError } = useSelector((state) => state.ui); //solo necesito el mensaje de error

    console.log(msgError);

    const handleRegistrer = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log("Form is valid");
        }
    };

    //validación formulario
    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("El nombre es obligatorio"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("El email no es válido"));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError("La contraseña no coincide o es menor de 5"));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegistrer}>
                {msgError && (
                    <div className="auth__alert-error">{msgError}</div>
                )}

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    disabled={false}
                >
                    Save
                </button>

                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    );
};

export default RegisterScreeen;
