import React, { useState } from "react";
import MultipleCustomHooks from "../examples/MultipleCustomHooks";

const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>useRef con: </h1>
            {show && <MultipleCustomHooks />}
            <button
                className="btn btn-outline-primary mt-4"
                onClick={() => setShow(!show)}
            >
                Show/Hide
            </button>
        </div>
    );
};

export default RealExampleRef;
