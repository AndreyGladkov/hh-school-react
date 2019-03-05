import React, {PureComponent, Component} from "react";

export default class Logs extends Component {
    render() {
        return (
            <div className={"log-panel"}>
                {Object.keys(this.props.logs).map((jsonKey, index) => (
                    <LogSection key={index} jsonValue={this.props.logs[jsonKey]}>{jsonKey}</LogSection>
                ))}
            </div>
        );
    }
}

class LogSection extends PureComponent {
    render() {
        return <div>
            <span className={"log-header"}>{this.props.children}</span>
            {this.props.jsonValue.map((value, index) => (
                <LogLine key={index}>{value}</LogLine>
            ))}
        </div>;
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
