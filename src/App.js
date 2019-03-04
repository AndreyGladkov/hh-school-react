import React, {Component, Fragment} from "react";
import './css/material.css';
import Logs from "./Logs";
import ToolBox from "./ToolBox";

export default class App extends Component {

    apiURL = "http://localhost:9200/api";

    state = {
        logs: []
    };

    doFetch = (reqId) => {
        let self = this;
        self.setState(state => ({
            logs: {text: "Loading..."}
        }));
        let url = this.apiURL;
        if (!reqId) {
            url += "/feelinglucky";
        } else {
            url += '/logs?rid=' + reqId;
        }
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                self.setState(state => ({
                    logs: json
                }));
            })
            .catch(() => {
                self.setState(state => ({
                    logs: {text: "Network Error."}
                }));
            });
    };

    render() {
        return (
            <Fragment>
                <ToolBox search={this.doFetch} feelLucky={this.doFetch}/>
                <Logs logs={this.state.logs}/>
            </Fragment>
        );
    }
}
