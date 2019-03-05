import { combineReducers, createStore, applyMiddleware} from "redux";

import logs from "./models/log";
import thunk from "./middlewares/thunk";


const stateFromServer = {
    logs : ["test"]
};

const reducer = combineReducers({
    logs
});

export default createStore(
    reducer,
    stateFromServer,
    applyMiddleware(thunk)
);
