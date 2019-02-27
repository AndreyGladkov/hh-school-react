import React, { PureComponent, Fragment } from "react";

export default class Form extends PureComponent {
    state = {
        rid: ""
    };
    input = React.createRef();

    add = func => {
        if (!this.input.current.value.trim()) {
            return;
        }
        this.props[func](this.input.current.value);
        this.input.current.value = "";
    };

    feelingLucky = () => {
        this.getRid();
        this.input.current.value = this.state.rid;
    };

    getRid = () => {
        const URL = "http://localhost:9200/api/feelinglucky";
        fetch(URL)
            .then(res => {
                if (res.status !== 200) {
                    this.setState({response: {error: "not found"}});
                    throw new Error("Error while fetching getRid. Response status: " + res.status);
                }
                return res.json();
            })
            .then(json => {
                this.setState({ rid: json.rid });
            });
    };

    render() {
        return (
            <Fragment>
                <input ref={this.input} />
                <button onClick={this.add.bind(this, "search")}>Search</button>
                <button onClick={this.feelingLucky}>
                    I'm Feeling Lucky
                </button>
            </Fragment>
        );
    }
}
