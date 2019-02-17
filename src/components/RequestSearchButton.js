import React, { Component } from 'react';


class RequestSearchButton extends Component {

  handleChange = () => {
    this.props.onButtonClick();
  }

  render() {
    return (
      <button className="searchrid-buttons__button" onClick={this.handleChange}>{this.props.text}</button>
    )
  }
}

export default RequestSearchButton;
