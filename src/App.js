import React, { Component } from 'react';
import './App.css';
import { getResults, getLuckyRid } from './api/api.js';
import { beautifyResponse } from './common/helperFunctions.js';
import RequestInput from './components/RequestInput.js';
import RequestSearchButton from './components/RequestSearchButton.js';
import RequestResults from './components/RequestResults.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: undefined,
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleClick = async () => {
    if (this.state.inputValue) {
      const response = beautifyResponse(await getResults(this.state.inputValue));
      this.setState({ response });
    }
  }

  handleClickFeelLucky = async () => {
    const rid = await getLuckyRid();
    const response = beautifyResponse(await getResults(rid));
    this.setState({ inputValue: rid, response });
  }

  render() {
    return (
      <div className="searchrid-wrapper">
        <RequestInput value={this.state.inputValue} onChange={this.handleInputChange}/>
        <div className="searchrid-buttons">
          <RequestSearchButton text="Search" onButtonClick={this.handleClick}/>
          <RequestSearchButton text="I'm Feeling Lucky" onButtonClick={this.handleClickFeelLucky}/>
        </div>
        <RequestResults output={this.state.response}/>
      </div>
    );
  }
}

export default App;
