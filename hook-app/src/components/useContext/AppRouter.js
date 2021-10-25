//encargado de mostrar y gestionar las rutas
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Navbar from "./Navbar";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    {/* <Route component={HomeScreen} /> */}
                    <Redirect to="/"></Redirect>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
