import React from "react";
import ReactDOM from "react-dom";

import HookApp from "./HookApp";

ReactDOM.render(
    <React.StrictMode>
        <HookApp />
    </React.StrictMode>,
    document.getElementById("root")
);

// Importación para eve funcionamiento de reducer (se tiene que comentar todo lo anterior)
//import "./components/useReducer/intro-reducer";
