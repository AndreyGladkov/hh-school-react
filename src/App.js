import React, { Component } from "react";
import Search from "./components/Search";
import { connect } from "react-redux";

import { setRID, feelingLucky, getLogs } from "./actions";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setRID(""));
  }

  onInput = rid => this.props.dispatch(setRID(rid));

  onFeelingLucky = () => this.props.dispatch(feelingLucky());

  onSearch = rid => this.props.dispatch(getLogs(rid));

  onFormActions = {
    onInput: this.onInput,
    onFeelingLucky: this.onFeelingLucky,
    onSearch: this.onSearch
  };

  render() {
    return (
      <Search
        rid={this.props.rid}
        onFormActions={this.onFormActions}
        message={this.props.message}
        found={this.props.found}
      />
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
