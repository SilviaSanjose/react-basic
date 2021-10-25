import React, { useState, useCallback } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
    const [counter, setCounter] = useState(0);

    /* const increment = () => {
        setCounter(counter + 1);
    }; */
    //en este caso no sirve usar sólo memo en el componente ShowIncrement ya que cada vez que se renderiza CallbackHook la función increment que se pasa al
    //componente es una nueva función que se crea.Por ello usamos useCallback

    const increment = useCallback(
        (num) => {
            setCounter((c) => c + num); //no se puede poner directamente setCounter(counter + 1); porqe necesitamos que sea una copia memorizada
        },
        [setCounter]
    );

    // useEffect(() => {}, [increment]);  *se puede usar con useEffect

    return (
        <div>
            <h1>CallBack Hook</h1>
            <p>Counter: {counter}</p>

            <ShowIncrement increment={increment} />
        </div>
    );
};

export default CallbackHook;
