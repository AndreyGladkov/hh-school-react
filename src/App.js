import React, { Fragment } from "react";
import LogComponent from "./components/LogComponent"
import "./styles.css"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.URL = 'http://localhost:9200/api';
    this.state = {
      inputValue: '',
      searchStatus: 'success',
      logComponents: []
    };
  }

  render() {
    return (
        <Fragment>
          <input className='searchInput' value={this.state.inputValue} onChange={ event => this.updateInputValue(event.target.value) }/>
          <button onClick={ () => this.search(this.state.inputValue) }>Search</button>
          <button onClick={ () => this.handleFeelingLuckyClick() }>I'm Feeling Lucky</button>          
          <div>
            {this.state.searchStatus === 'failed' ? <span>Search failed</span> : this.state.logComponents}
          </div>
        </Fragment>
    );
  }

  updateInputValue(value) {
    this.setState({
      inputValue: value
    });
  }

  handleFeelingLuckyClick() {
    fetch(this.URL + '/feelinglucky')
    .then((response) => {
			if (response.status !== 200) {
				throw new Error("Can't fetch response. Response status: " + response.status);
			}
			return response.json();
    })
    .then((data) => {
      this.updateInputValue(data.rid)
    })
    .catch(() => {
      this.updateInputValue('')
    });
  }

  search(rid) {
    fetch(this.URL + '/logs?rid=' + rid)
    .then((response) => {
			if (response.status !== 200) {
				throw new Error("Can't fetch response. Response status: " + response.status);
      }
      this.setState({searchStatus: 'success'});
			return response.json();
    })
    .then((data) => {
      this.setState({
        logComponents: Object.keys(data).map(item => <LogComponent key={item} logComponentTitle={item} logComponentItems={data[item]} />)
      });
    })
    .catch(() => {
      this.setState({searchStatus: 'failed'});
    });
  }

};
