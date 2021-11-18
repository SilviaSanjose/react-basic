import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

const PublicRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
    //renombro a Component con C para que sea una etiqueta de componente
    return (
        <Route
            {...rest}
            component={(props) =>
                !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

PublicRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
export default PublicRoutes;
