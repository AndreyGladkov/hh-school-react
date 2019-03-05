import {applyMiddleware, combineReducers, createStore} from "redux";

import logs from "./models/log";
import text from "./models/text";
import thunk from "./middlewares/thunk";


const stateFromServer = {
    logs: {},
    text: {value : "No data"}
};

const reducer = combineReducers({logs, text});

export default createStore(
    reducer,
    stateFromServer,
    applyMiddleware(thunk)
);
