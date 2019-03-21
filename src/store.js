import { createStore, applyMiddleware, compose } from "redux";

import searchResults from "./models/logs";
import thunk from "redux-thunk";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const stateFromServer = {
    response: {}
};

export default createStore(
    searchResults,
    stateFromServer,
    composeEnhancers(applyMiddleware(thunk))
);
