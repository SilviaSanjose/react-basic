import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreeen from "../components/auth/RegisterScreeen";

const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />

                <Route
                    exact
                    path="/auth/register"
                    component={RegisterScreeen}
                />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    );
};

export default AuthRouter;
