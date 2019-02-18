import React from "react";



export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchString: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleFeelingLucky = this.handleFeelingLucky.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({searchString: event.target.value});
    }


    handleFeelingLucky(event) {
        fetch('/api/feelinglucky/')
            .then(response => response.json())
            .then(json => this.setState({searchString:json.rid }));

    }

    handleSearch(event) {
        this.setState({logs:undefined});
        fetch('/api/logs?rid='+this.state.searchString)
            .then(response => response.json())
            .then(json => this.setState({logs:json}));
    }


    render(){
        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleChange} value={this.state.searchString}/>
                    <button onClick={this.handleFeelingLucky}>feelinglucky</button>
                    <button onClick={this.handleSearch}>search</button>
                </div>
                {this.state.logs!==undefined && <AllLogs logs={this.state.logs}/>}
            </div>
        );
    }
};


function AllLogs(props){
    const logs = props.logs;
    const listnames=[];
    for(var name in logs){
        listnames.push(name);
    }
    return(
        <div>
            {listnames.map(listname=>
            <div key={listname}>
                <h3>
                    {listname}
                </h3>
                <LogsGroup logs={logs[listname]}/>
            </div>)}
        </div>
    );
}


function LogsGroup(props){
    var logsGroup = props.logs
    return(
        <div>
            {logsGroup.map((log,index)=>
                <Log key={index} log={log}/>
            )}
        </div>
    );
}

function Log(props){
    var log=props.log;
    var lvl="";
    if(log.lvl!==undefined){
        lvl=log.lvl;
    }
    return(
        <p>{log.timestamp+" "+lvl+" "+log.message}</p>
    );
}





