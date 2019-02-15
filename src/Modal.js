import React, { Component } from 'react';
import Search from './Search';
import SearchButton from './SearchButton';
import ResponseList from './ResponseList';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleRidChange = this.handleRidChange.bind(this);
    this.handleRidSubmit = this.handleRidSubmit.bind(this);
    this.handleLuckClick = this.handleLuckClick.bind(this);
    this.state = {rid: '', response: {"Enter request ID": []}};
  }

  handleRidChange(newRid) {
    this.setState({rid: newRid});
  }

  handleRidSubmit(e) {
    const rid = this.state.rid;
    const that = this;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9200/api/logs?rid=' + rid, true);
    xhr.send();
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        that.setState({response: {"404 Not Found": []}});
      } else {
        that.setState({response: JSON.parse(xhr.responseText)});
      }
    };
  }

  handleLuckClick(e) {
    const that = this;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9200/api/feelinglucky', true);
    xhr.send();
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        that.setState({rid: JSON.parse(xhr.responseText).rid})
      }
    };
  }

  render() {
    const rid = this.state.rid;
    const response = this.state.response;
    return (
      <div className="modal">
        <div className="modal-search">
          <Search reqId={rid} onInputChange={this.handleRidChange} />
          <SearchButton onClick={this.handleRidSubmit} name='Search' />
          <SearchButton onClick={this.handleLuckClick} name='Luck' />
        </div>
        <ResponseList data={response} />
      </div>
    );
  }

}

export default Modal;