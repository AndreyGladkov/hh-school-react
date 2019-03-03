import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import { search } from "./models/logs";
import { updateInputValue, getLucky } from "./models/params"; 

import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");

const AppContainer = connect(
  state => ({
    logs: state.logs,
    params: state.params
  }),
   {
    getLucky,
    search,
    updateInputValue
  }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
