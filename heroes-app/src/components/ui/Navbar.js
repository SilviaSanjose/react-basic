import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

//navbar al ser un componente y no una ruta dentro de <Router><switch> </switch></Router> no tiene acceso al History
//para ello se usa el hook de reacr router useHistory

export const Navbar = () => {
    /* const { user } = useContext(AuthContext); //obtengo el user que es uno de los valores del context
    const { name } = user; //obtengo sólo el nombre del user */
    const {
        user: { name },
        dispatch,
    } = useContext(AuthContext); //lo mismo que arriba pero reducido

    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });
        history.replace("/login");
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-text">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">{name}</span>
                    <button
                        className="btn nav-item nav-link"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
