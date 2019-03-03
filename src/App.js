import React, { Fragment } from "react";

import LogComponent from "./components/LogComponent";

import "./styles.css";

export default class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.inputValue !== this.props.params.inputValue) {
      this.setInputValue(nextProps.params.inputValue);
    }
  }

  setInputValue(val) {
    this.refs.pathInput.value = val;
  }

  render() {
    return (
      <Fragment>
        <input
          className="searchInput"
          ref="pathInput"
          onChange={event => {
            event.persist();
            this.handleUpdateInputValue(this.refs.pathInput.value);
          }}
        />
        <button type="button" onClick={this.handleSearch}>
          Search
        </button>
        <button type="button" onClick={this.handleFeelingLuckyClick}>
          {"I'm Feeling Lucky"}
        </button>
        <div>
          {this.props.logs.searchStatus === "failed" ? (
            <span>Search failed</span>
          ) : (
            Object.keys(this.props.logs.logData).map(item => (
              <LogComponent
                key={item}
                logComponentTitle={item}
                logComponentItems={this.props.logs.logData[item]}
              />
            ))
          )}
        </div>
      </Fragment>
    );
  }

  handleUpdateInputValue = value => this.props.updateInputValue(value);

  handleFeelingLuckyClick = () => this.props.getLucky();

  handleSearch = () => this.props.search(this.props.params.inputValue);

}
