import React, { PureComponent, Component } from "react";
import { styled } from '@material-ui/styles';

const StyledH2 = styled("h2")({
    padding: "0px 20px",
    "font-family": "Poppins, sans-serif",
});

const StyledLi = styled("ul")({
    "list-style-type": "none",
    margin: '0px 0px 0px -20px',
    padding: '5px 0px',
    "font-family": "Poppins, sans-serif"
});

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledSpan = styled(({ color, ...other }) => <span {...other} />)({
    color: styledBy('color', {
        red: 'red',
        black: '#000',
    })
});

export default class Results extends Component {
    render() {
        if (!this.props.response) return null;
        return (
            <div>
                {Object.keys(this.props.response).map(key => (
                    <div key={key}>
                        <StyledH2>{key}</StyledH2>
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
            <ul>
                {this.props.logs.map(log => (
                    <StyledLi key={log.timestamp + log.hostname + log.lvl}>
                        <b>{log.timestamp}</b>
                        <StyledSpan color={log.lvl === 'ERROR' ? 'red' : 'black'}> {log.lvl}</StyledSpan>
                        <span> {log.message}</span>
                    </StyledLi>
                ))}
            </ul>
        );
    }
}
