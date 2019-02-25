import React from "react";

function LogBatch(props) {
  let logList = props.logBatch;
  return (
    <ul>
      {Object.keys(logList).map(logKey => (
        <li key={logKey}>{Object.values(logList[logKey]).join('; ')}</li>
      ))}
    </ul>
  );
}

function LogBatches(props) {
  let logs = props.logs;
  if (logs === undefined) {
    return null;
  }
  let listOfHeaders = Object.keys(logs);
  return (
    <div>
      {listOfHeaders.map((logHead, index) =>
        (
          <div key={index}>
            <h3>{logHead}</h3>
            <LogBatch logBatch={logs[logHead]}/>
          </div>
        )
      )}
    </div>
  );
}

export default class App extends React.Component {

  state = {searchText: ''};

  textChangeHandler = e => {
    this.setState({searchText: e.target.value});
  };

  searchHandler = e => {
    fetch('/api/logs?rid='+this.state.searchText)
      .then(response => {
        if (response.status !== 200) {
          this.setState({logs: {'Nothing to show...': []}});
          throw new Error("Fetch failed. Status: " + response.status);
        }
        return response.json()
      })
      .then(json => this.setState({logs:json}));
  };

  feelLuckyHandler = e => {
    fetch('/api/feelinglucky/')
      .then(response => {
        if (response.status != 200) {
          throw new Error("Fetch failed. Status: " + response.status);
        }
        return response.json()
      })
      .then(json => this.setState({searchText:json.rid }));
  };

  render() {
    return (
        <div>
          <input type="text" onChange={this.textChangeHandler} value={this.state.searchText}/>
          <button onClick={this.searchHandler}>search</button>
          <button onClick={this.feelLuckyHandler}>i'm feeling lucky</button>
          <LogBatches logs={this.state.logs}/>
        </div>
    );
  }
}
