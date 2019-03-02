import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import { search, getLucky } from "./models/logs";

import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");

const AppContainer = connect(
  state => ({
    logs: state.logs
  }),
  {
    getLucky,
    search
  }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
