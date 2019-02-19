import React, { Component } from 'react';


class RequestInput extends Component {
  
  render() {
    return (
      <input 
        className="searchrid__input" 
        type="search" 
        autoFocus={true} 
        placeholder="...Enter Request ID"
        onChange={this.props.onChange} 
        value={this.props.value}
      />
    );
  }
}

export default RequestInput;
