import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import LogComponent from "./components/LogComponent";

import store from "./store";

import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <input
          className="searchInput"
          value={this.props.logs.inputValue}
          //onChange={event => this.updateInputValue(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            console.log("clicked search2");
            console.log("this.props", this.props);
            console.log("logs: ", this.props.logs);
            this.props.search(this.props.logs.inputValue);
          }}
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("clicked feeling lucky");
            console.log("this.props", this.props);
            this.props.getLucky();
          }}
        >
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
}
