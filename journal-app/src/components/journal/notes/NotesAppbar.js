import React from "react";

const NotesAppbar = () => {
    const date = new Date();
    var options = { year: "numeric", month: "long", day: "numeric" };
    const today = date.toLocaleString("es-ES", options);
    return (
        <div className="notes__appbar">
            <span>{today}</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn">Save</button>
            </div>
        </div>
    );
};

export default NotesAppbar;
