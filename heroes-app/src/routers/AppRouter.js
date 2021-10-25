import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
    return (
        /* solo el principal lleva Router, los hijos solo el switch */
        <Router>
            <div>
                <Switch>
                    {/*  Indico para la ruta exacta /login sólo se renderiza ese componente */}
                    <Route exact path="/login" component={LoginScreen}></Route>

                    {/* Para el resto de rutas, renderizo el componente que tiene el navbar y resto de rutas. */}
                    <Route path="/" component={DashboardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
