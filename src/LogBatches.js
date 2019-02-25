import React from "react";

export default class LogBatches extends React.Component {
  render() {
    let logs = this.props.logs;
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
}

class LogBatch extends React.Component {

  render() {
    let logList = this.props.logBatch;
    return (
      <ul>
        {Object.keys(logList).map(logKey => (
          <li key={logKey}>{Object.values(logList[logKey]).join('; ')}</li>
        ))}
      </ul>
    );
  }
}
