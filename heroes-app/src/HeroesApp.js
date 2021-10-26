import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

//init será el usuario guardado en localStorage en caso de existir, y si no (porque no está logado) un objeto con logged: false
const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    //se guarda en localStorage el usuario solo si cambia
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        //llamo al contexto para que se englobe en toda la app, pasando como valores compartidos el usuario y el dispacher
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};
