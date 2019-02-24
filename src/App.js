import React from "react";

function LogBatch(props) {
  let logList = props.logBatch;
  return (
    <ul>
      {Object.values(logList).map(log => (
        <li>{Object.values(log).join('; ')}</li>
      ))}
    </ul>
  );
}

function LogBatches(props) {
  let logs = props.logs;
  if (logs === undefined) {
    return null;
  } else {
    let listOfHeaders = Object.keys(logs);
    return (
      <div>
        {listOfHeaders.map(logHead =>
          (
            <div>
              <h3>{logHead}</h3>
              <LogBatch logBatch={logs[logHead]}/>
            </div>
          )
        )}
      </div>
    );
  }
}

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {searchText: ''};
      this.textChangeHandler = this.textChangeHandler.bind(this);
      this.feelLuckyHandler = this.feelLuckyHandler.bind(this);
      this.searchHandler = this.searchHandler.bind(this);
  }

  textChangeHandler(e) {
    this.setState({searchText: e.target.value});
  }

  searchHandler(e) {
    fetch('/api/logs?rid='+this.state.searchText)
      .then(response => {
        if (response.status != 200) {
          this.setState({logs: {'Nothing to show...': []}});
          throw new Error("Fetch failed. Status: " + response.status);
        }
        return response.json()
      })
      .then(json => this.setState({logs:json}));
  }

  feelLuckyHandler(e) {
    fetch('/api/feelinglucky/')
      .then(response => {
        if (response.status != 200) {
          throw new Error("Fetch failed. Status: " + response.status);
        }
        return response.json()
      })
      .then(json => this.setState({searchText:json.rid }));
  }

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
