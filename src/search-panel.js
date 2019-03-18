import React, { Component } from 'react';

export default class SearchPanel extends Component {
    state = {
        inputField: ''
    }
    onInputChange = (e) => {
        this.setState({
            inputField: e.target.value,
        })
    }

    onSearch = (e) => {
        this.props.onSearch(this.state.inputField);
        this.setState({
            inputField: '',
        })
    }

    onLucky =() => {
        this.props.onLucky()
            .then(({rid}) => {
                this.setState({
                    inputField: rid,
                })
                console.log(rid)
            });
    }

    render() {
        return (
            <div className="search-panel">
                <input type="text" onChange={this.onInputChange} 
                    value={this.state.inputField}></input>
                <button type="button" onClick={this.onSearch}>Search</button>
                <button type="button" onClick={this.onLucky}>I'm Feeling Lucky</button>
            </div>
        );
    }
}