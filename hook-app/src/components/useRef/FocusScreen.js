import React, { useRef } from "react";

const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };
    return (
        <div>
            <h1>useRef</h1>

            <input
                className="form-control"
                id="input"
                placeholder="Nombre"
                ref={inputRef}
            />
            <button
                className="btn btn-outline-primary mt-4"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    );
};

export default FocusScreen;
