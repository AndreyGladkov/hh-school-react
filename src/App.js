import React, {Component, Fragment} from "react";
import './css/material.css';
import Logs from "./Logs";
import ToolBox from "./ToolBox";

export default class App extends Component {
    state = {
        logs: [
            {lineText: "line 1", id: 1},
            {lineText: "line 2", id: 2},
            {lineText: "line 3", id: 3}
        ]
    };

    searchLog = reqId => {
        console.log(reqId);
        this.setState(state => ({
            logs: state.logs + "\nNew log text"
        }));
    };

    feelLucky = reqId => {
        console.log("reqId: " + reqId);
    };


    render() {
        return (
            <Fragment>
                <ToolBox search={this.searchLog} feelLucky={this.feelLucky}/>
                <Logs logs={this.state.logs}/>
            </Fragment>
        );
    }
}
