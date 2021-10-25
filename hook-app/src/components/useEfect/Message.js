import React, { useEffect, useState } from "react";

const Message = () => {
    const [coords, setCoords] = useState({});

    useEffect(() => {
        console.log("Componente montado");

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y }; //obtengo las coordenadas del evento que salta al mover el ratón
            setCoords(coords);
        };
        window.addEventListener("mousemove", mouseMove); //llamo a la función para recoger datos del eventListener

        return () => {
            console.log("Componente desmontado/limpieza");
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
    return (
        <div>
            <h4>Coordenadas:</h4>
            <p>x: {coords.x} </p>
            <p>y: {coords.y} </p>
        </div>
    );
};

export default Message;
