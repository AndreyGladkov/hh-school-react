import React, { Fragment } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {found: {}}
    this.onSearch = this.onSearch.bind(this)
  }
  render() {
    return (
      <Fragment>
          <SearchForm onSearch={this.onSearch}/>
          <SearchResults found={this.state.found} message={this.state.message}/>
      </Fragment>)
  }
  onSearch(result) {
    this.setState({found: result.found, message: result.message})
  }
}
