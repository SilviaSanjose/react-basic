import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
    console.log("Renderizando componente ShowIncrement");
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => {
                    increment(5);
                }}
            >
                Increment
            </button>
        </div>
    );
});

export default ShowIncrement;
