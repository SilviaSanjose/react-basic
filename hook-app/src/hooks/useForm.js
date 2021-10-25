import { useState } from "react";

//custom hook para manejar formularios y ser reutilizable

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        //resetar los campos de los formularios
        setValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        //del evento, me quedo con el target que tiene la información
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange, reset];
};

export default useForm;
