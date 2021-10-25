import React, { useState } from "react";
import "./counterApp.css";

const CounterApp = () => {
    const [state, setState] = useState({ counter1: 10, counter2: 20 });

    const { counter1, counter2 } = state; //desestruturación para poder modificar sólo un valor con el botón

    return (
        <div>
            <h1>useState</h1>
            <h4>Counter without Hook</h4>
            <p>Counter1: {counter1}</p>
            <p>Counter2: {counter2}</p>
            <button
                className="btn btn-primary"
                onClick={() => setState({ ...state, counter1: counter1 + 1 })} //spread operator para mantener los datos y modificar sólo el indicado.
            >
                +1
            </button>
        </div>
    );
};

export default CounterApp;
