import React, { PureComponent, Fragment } from "react";

export default class Form extends PureComponent {
    state = {
        rid: ""
    };

    add = func => {
        if (this.state.rid) {
            this.props[func](this.state.rid);
        }
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
                <input type="text" value={this.state.rid} onChange={e => this.setState({rid: e.target.value})}/>
                <button onClick={this.add.bind(this, "search")}>Search</button>
                <button onClick={this.getRid}>
                    I'm Feeling Lucky
                </button>
            </Fragment>
        );
    }
}
