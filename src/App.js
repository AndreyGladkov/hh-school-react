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
        let url = this.apiURL;
        if (typeof reqId === 'string') {
            url += '/logs?rid=' + reqId;
        } else {
            url += "/feelinglucky";
        }
        self.setState(state => ({
            logs: {text: "Loading..."}
        }));
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network Error.  Status code: ' + response.status);
                }
            })
            .then(function (json) {
                self.setState(state => ({
                    logs: json
                }));
            })
            .catch((error) => {
                self.setState(state => ({
                    logs: {text: error.message}
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
