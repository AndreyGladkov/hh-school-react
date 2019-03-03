import React, {PureComponent, Component} from "react";

export default class Logs extends Component {
    render() {
        return (
            <div className={"log-panel"}>
                {Object.keys(this.props.logs).map((lineText, index) => (
                    <LogSection key={index} line={this.props.logs[lineText]}>{lineText}</LogSection>
                ))}
            </div>
        );
    }
}

class LogSection extends PureComponent {
    render() {
        let content;
        if (this.props.children === "rid" || this.props.children === "text") {
            content = <span className={"log-header"}>{this.props.line}</span>;
        } else {
            content = <div>
                <span className={"log-header"}>{this.props.children}</span>
                {this.props.line.map((value, index) => (
                    <LogLine key={index}>{value}</LogLine>
                ))}
            </div>;
        }
        return content;
    }
}

class LogLine extends PureComponent {
    render() {
        return <p>
            <span className={"log-field log-timestamp"}>{this.props.children.timestamp}</span>
            <span className={"log-field log-lvl"}>{this.props.children.lvl}</span>
            <span className={"log-field"}>{this.props.children.message}</span>
        </p>
    }
}
