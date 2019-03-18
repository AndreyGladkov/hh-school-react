import React, { Component } from "react";

import SearchPanel from "./search-panel";
import Info from "./info";
import ApiService from './api-service';

export default class App extends Component {
  state = {
    error: "",
    info: ""
  }
  apiService = new ApiService();

  onSearch = (inputValue) => {
    this.apiService.getLogs(inputValue)
      .then((info) => {
        this.setState({
          info,
          error: ""
        });
      })
      .catch((error) => {
        this.setState({
          info: "",
          error: `${error}`
        })
      })
  }

  onLucky = () => {
    this.setState({
      info: '',
      error: ''
    })
    return this.apiService.getLucky();
  }

  render() {
    return (
        <div className="app">
          <SearchPanel 
            onSearch={this.onSearch}
            onLucky={this.onLucky}/>
          <Info info={this.state.info} error={this.state.error}/>
        </div>
    );
  }
};
