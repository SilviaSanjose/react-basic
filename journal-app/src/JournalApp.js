import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

export default JournalApp;

/*Redux:
store/store.js  es la fuente de la información para Redux, donde añadimos lo qe queremos que se guarde en el store.
useSelector:  para seleccionar los datos guardados en el store de redux
*/
