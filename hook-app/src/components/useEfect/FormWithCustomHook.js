import useForm from "../../hooks/useForm";
import { useEffect } from "react";

const FormWithCustomHook = () => {
    //en cada componente al llamar al useForm le puedes enviar los datos específicos.
    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formValues; //desestructuro para no tener que llamar con formValues.name, etc..

    useEffect(() => {
        console.log("Custom Email cambio");
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>useEffect con Custom Hook</h1>
            <div className="form.group my-form">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Introduce nombre"
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

            <div className="form.group my-form">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Introduce pass"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <p>Pass: {password}</p>
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default FormWithCustomHook;
