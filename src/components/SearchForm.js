import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {id: ''}
    this.updateInputValue = this.updateInputValue.bind(this)
    this.feelingLucky = this.feelingLucky.bind(this)
    this.search = this.search.bind(this)
  }
  render() {
    return (
      <form>
          <FormGroup row={true}>
              <TextField style={{ flex: 1 }} value={this.state.id} onChange={this.updateInputValue}/>
              <Button size="small" variant="outlined" color="primary" onClick={this.search}>
                  Search
              </Button>
              <Button size="small" variant="outlined" color="primary" onClick={this.feelingLucky}>
                  {"I'm feeling lucky"}
              </Button>
          </FormGroup>
      </form>)
  }
  updateInputValue(event) {
    this.setState({id: event.target.value})
  }
  feelingLucky(event) {
    fetch('/api/feelinglucky')
      .then(response => response.json())
      .then(data => this.setState({id: data.rid}))
  }
  search(event) {
    const rid = this.state.id
    fetch(`/api/logs?rid=${rid}`)
      .then(
        response =>
          response.ok ?
          response.json().then(found => this.props.onSearch({found: found})) :
          response.text().then(message => this.props.onSearch({message: message})))
  }
}

