import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./layout.css";

//ejemplo para obtener el tamaño de un párrafo que se va mostrando

const Layout = () => {
    const { counter, increment } = useCounter(1);

    const { data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    const { quote } = !!data && data[0];
    //doble !! ya que si no hay datos es null, primer ! convertiría a true y el segundo a false > no se ejecuta la condición
    //En caso de traer datos; primer ! pone a false y el seguno true y se ejecuta

    //añado referencia al párrafo
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        //cada vez que cambie la cita, cambio el tamaño guardado
        setBoxSize(pTag.current.getBoundingClientRect()); //getBoundingClientRect() es de Html para obtener dimensiones de un elemento
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>

            <blockquote className="blockquote text-right blockquote-layout">
                <p ref={pTag}>{quote}</p>
            </blockquote>
            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <button className="btn btn-primary" onClick={() => increment()}>
                Siguiente cita
            </button>
        </div>
    );
};

export default Layout;
