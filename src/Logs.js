import React, { PureComponent, Component } from "react";

export default class Logs extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.logs.map(({ lineText, id }, index) => (
                        <LogLine key={id}>{lineText}</LogLine>
                    ))}
                </ul>
            </div>
        );
    }
}

class LogLine extends PureComponent {
    render() {
        return <li>{this.props.children}</li>;
    }
}
