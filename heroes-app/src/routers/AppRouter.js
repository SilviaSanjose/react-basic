import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
    //obtengo el contexto para obtener datos del usuario
    const { user } = useContext(AuthContext);
    return (
        /* solo el principal lleva Router, los hijos solo el switch */
        <Router>
            <div>
                <Switch>
                    {/*  Indico para la ruta exacta /login sólo se renderiza ese componente */}
                    {/* <Route exact path="/login" component={LoginScreen}></Route> */}
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={user.logged}
                    />

                    {/* Para el resto de rutas, renderizo el componente que tiene el navbar y resto de rutas que es Dashboard. 
                    en vez de pasar una ruta, le paso mi componente que es una ruta para las rutas privadas(logueado)*/}
                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
