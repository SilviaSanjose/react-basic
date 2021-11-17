//fuente de la información para Redux
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";

//de redux-devtools para implementar otros middleware, en nuestro caso usar thunk
const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
});

//createStore sólo recibe un reducer
export const store = createStore(
    reducers,
    //Esto sería sin usar thunk, sólo redux-deltools >> window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(applyMiddleware(thunk))
);
