import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./components/auth/store";

const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

export default JournalApp;
