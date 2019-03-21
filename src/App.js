import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Results from "./Results";
import Form from "./Form";
import {fetchLogs} from "./models/logs";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Form search={this.props.fetchLogs} />
                <Results response={this.props.response} />
            </Fragment>
        );
    }
}

export default connect(
    state => ({
        response: state.response
    }),
    {
        fetchLogs
    }
)(App);
