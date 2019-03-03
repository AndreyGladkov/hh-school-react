import React, {Component, Fragment} from "react";
import './css/material.css';
import Logs from "./Logs";
import ToolBox from "./ToolBox";

export default class App extends Component {
    state = {
        logs: []
    };

    searchLog = reqId => {
        console.log("in search log: " + reqId);
        let self = this;
        let req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:9200/api/logs?rid=' + reqId);
        req.send(null);

        console.log(JSON.parse("{\"text\": \"Loading...\"}"));

        self.setState(state => ({
            logs: {text: "Loading..."}
        }));

        req.onloadend = function () {
            if (req.status === 200) {
                self.setState(state => ({
                    logs: JSON.parse(req.responseText)
                }));
            } else {
                self.setState(state => ({
                    logs: {text: "Error. Response status:" + req.status}
                }));
            }

        };
    };

    feelLucky = () => {
        let self = this;
        let req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:9200/api/feelinglucky');
        req.send(null);
        req.onloadend = function () {
            if (req.status === 200) {
                self.setState(state => ({
                    logs: JSON.parse(req.responseText)
                }));
            } else {
                self.setState(state => ({
                    logs: {text: "Error. Response status:" + req.status}
                }));
            }
        };
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
