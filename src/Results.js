import React, { PureComponent, Component } from "react";

export default class Results extends Component {
    render() {
        if (!this.props.response) return null;
        return (
            <div>
                {Object.keys(this.props.response).map(key => (
                    <div key={key}>
                        <h3>{key}</h3>
                        <Logs logs={this.props.response[key]}/>
                    </div>
                ))}
            </div>
        );
    }
}

class Logs extends PureComponent {
    render() {
        if (!this.props.logs) return null;
        return (
            <div>
                {this.props.logs.map(log => (
                    <div key={log.timestamp + log.hostname + log.lvl}>
                        <span>{log.timestamp} </span>
                        <span>{log.lvl} </span>
                        <span>{log.message}</span>
                    </div>
                ))}
            </div>
        );
    }
}
