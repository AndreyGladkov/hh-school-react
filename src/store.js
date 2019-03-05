import { combineReducers, createStore, applyMiddleware, compose} from "redux";

import logs from "./models/log";
import thunk from "./middlewares/thunk";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const stateFromServer = {
    logs : ["test"]
};

const reducer = combineReducers({
    logs
});

export default createStore(
    reducer,
    stateFromServer,
    composeEnhancers(applyMiddleware(thunk))
);
