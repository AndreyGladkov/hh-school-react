import React, { Component } from 'react';


class RequestResults extends Component {

  drawResults(output) {
    if (!output) {
      return;
    }
    let outputElements = [];
    Object.keys(output).forEach(service => {
      outputElements.push(<h3>{service}</h3>);
      let subservice = [];
      output[service].forEach(element => {
        subservice.push(<p>{element}</p>);
      });
      outputElements.push(<div>{subservice}</div>);
    })
    return outputElements;
  }

  render() {
    return (
      <div className="searchrid-wrapper__search-results">
        {this.drawResults(this.props.output)}
      </div>
    )
  }
}

export default RequestResults;
