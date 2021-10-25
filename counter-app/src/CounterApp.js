import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
    const handleAdd = (e) => {
        setCounter(counter + 1);
    };

    const handleReset = () => setCounter(value);

    const [counter, setCounter] = useState(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;