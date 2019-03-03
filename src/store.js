import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import logs from "./models/logs";
import params from "./models/params";
import thunk from "./middlewares/thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const stateFromServer = {
  params: {
    inputValue: ""
  },
  logs: {
    logData: []
  }
};

const reducer = combineReducers({
  params, // input value
  logs    // finded logs
});

export default createStore(
  reducer,
  stateFromServer,
  composeEnhancers(applyMiddleware(thunk))
);
