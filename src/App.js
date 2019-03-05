import React, {Component, Fragment} from "react";
import './css/material.css';
import Logs from "./Logs";
import ToolBox from "./ToolBox";

import ReactDOM from "react-dom";
import {connect, Provider} from "react-redux";

import store from "./store";
import {loadLog} from "./models/log";
import {fetchLog} from "./models/log";


class App extends Component {

    render() {
        return (
            <Fragment>
                {/*<ToolBox search={this.doFetch} feelLucky={this.doFetch}/>*/}
                <p>{JSON.stringify(this.props)}</p>
                {/*{Object.values(this.props.logs).map(({obj, index}) => (*/}
                    {/*<p>{JSON.stringify(obj)}</p>*/}
                {/*))}*/}
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

