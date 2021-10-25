import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            //opción 1 acumulando todas las categorias, la última búsqueda arriba
            // setCategories((cat) => [inputValue, ...cat]); //cat es el callback que sabe que corresponde a categories aunque no este pasado como propiedad

            //opción 2, sólo guarda/muestra la última búsqueda
            setCategories([inputValue]);

            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
