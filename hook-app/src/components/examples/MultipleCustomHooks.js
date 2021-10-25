import React from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    const { author, quote } = !!data && data[0];
    //doble !! ya que si no hay datos es null, primer ! convertiría a true y el segundo a false > no se ejecuta la condición
    //En caso de traer datos; primer ! pone a false y el seguno true y se ejevcuta

    return (
        <div>
            <h1>Multiple Custom Hooks</h1>
            <p>Breaking Bad quotes</p>

            {loading ? (
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                <blockquote className="blockquote text-right">
                    <p>{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )}

            <button className="btn btn-primary" onClick={() => increment()}>
                Siguiente cita
            </button>
        </div>
    );
};

export default MultipleCustomHooks;
