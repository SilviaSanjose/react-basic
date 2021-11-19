//fuente de la información para Redux
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../components/auth/authReducer";
import { uiReducer } from "../components/auth/uiReducer";
import { notesReducer } from "../components/journal/notes/notesReducer";

//de redux-devtools para implementar otros middleware, en nuestro caso usar thunk
const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
});

//createStore sólo recibe un reducer
export const store = createStore(
    reducers,
    //Esto sería sin usar thunk, sólo redux-deltools >> window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(applyMiddleware(thunk))
);
