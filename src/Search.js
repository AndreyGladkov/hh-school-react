import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.reqId == this.props.reqId)
      return false;
    else
      return true;
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const reqId = this.props.reqId;
    return <input type="text" value={reqId} onChange={this.handleChange} className="modal-search__input"/>;
  }
}

export default Search;