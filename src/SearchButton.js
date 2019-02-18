import React from 'react';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  handleClick(e) {
  	this.props.onClick(e);
  }

  render() {
    return <button onClick={this.handleClick} className="modal-search__button">{this.props.name}</button>;
  }
}

export default SearchButton;