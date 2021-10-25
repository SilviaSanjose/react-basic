import React, { useState, useMemo } from "react";
import { processHight } from "../../helpers/processHight";
import { useCounter } from "../../hooks/useCounter";

const MemoHook = () => {
    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true);

    //useMemo recibe una función(en este caso esta en helpers) y la dependencia que indica cuando tiene que volver a memorizar
    const memoProcess = useMemo(() => processHight(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <p>Counter: {counter}</p>

            <p>{memoProcess}</p>

            <button className="btn btn-primary" onClick={() => increment()}>
                +1
            </button>
            <button
                className="btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemoHook;
