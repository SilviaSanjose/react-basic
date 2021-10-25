//punto principal de la aplicación
import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
    //const user = { id: 1234, name: "silvi", email: "ss@gmail.es" };

    const [user, setUser] = useState({});

    return (
        //todo lo que este dentro de mi UserContext podrá acceder al valor/propiedad que tiene.
        //En este caso AppRouter y todas las rutas y componentes hijos
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            <AppRouter />
        </UserContext.Provider>
    );
};

export default MainApp;
