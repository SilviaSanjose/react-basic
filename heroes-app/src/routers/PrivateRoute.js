import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

const PrivateRoute = ({
    //props recibidas
    isAuthenticated,
    component: Component, //renombro a Component con C para que sea una etiqueta de componente
    ...rest //resto de elementos como el path, location,. etc..
}) => {
    //guardo la ultima página visitada guadadada automáticamente en el location de rouer
    localStorage.setItem("lastPath", rest.location.pathname);

    return (
        <Route
            {...rest}
            component={(props) =>
                isAuthenticated ? (
                    <Component {...props} /> //Component es Dashboard que es que es pasado en props desde AppRouter.js, y con las props(como el path)
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
export default PrivateRoute;
