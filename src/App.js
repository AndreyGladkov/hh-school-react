import React, {Component, Fragment} from "react";
import './css/material.css';
import Logs from "./Logs";
import ToolBox from "./ToolBox";

import ReactDOM from "react-dom";
import {connect, Provider} from "react-redux";

import store from "./store";
import {fetchLog} from "./models/log";


class App extends Component {

    render() {
        return (
            <Fragment>
                <ToolBox search={this.props.fetchLog} feelLucky={()=>{console.log("invoke feel lucky")}}/>
                <Logs logs={this.props.logs}/>
            </Fragment>
        );
    }
}

const rootElement = document.getElementById("root");

const AppContainer = connect(
    state => ({
        logs: state.logs
    }),
    {
        fetchLog
    }
)(App);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    rootElement
);

