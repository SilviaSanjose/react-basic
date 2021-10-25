import React from "react";
import PropTypes from "prop-types";
import CounterApp from "./CounterApp";

const PrimeraApp = ({ saludo, subtitulo }) => {
    const hola = "Hola Mundo";

    const yo = {
        nombre: "Silvia",
        edad: 39,
    };

    return (
        <>
            <h1>{hola}</h1>
            <p>Mi primera aplicación</p>
            <p> {JSON.stringify(yo, null, 3)}</p>
            <p>{saludo}</p>
            <p>{subtitulo}</p>

            <CounterApp />
        </>
    );
};
PrimeraApp.protoTypes = {
    saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo: "Soy una prop por defecto",
};

export default PrimeraApp;
