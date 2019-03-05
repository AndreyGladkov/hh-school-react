import React, {Component} from "react";

export default class Text extends Component {
    render() {
        return (
            <div className={"log-panel"}>
                <span className={"log-header"}>{this.props.text[Object.keys(this.props.text)[0]]}</span>
            </div>
        );
    }
}