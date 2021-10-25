import React from "react";
import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(100);

    return (
        <div>
            <h4>Counter with Hook</h4>
            <p>Counter: {counter}</p>

            <button className="btn btn-primary" onClick={() => increment(2)}>
                +2
            </button>
            <button className="btn btn-primary" onClick={() => decrement()}>
                -1
            </button>
            <button className="btn btn-primary" onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default CounterWithCustomHook;
