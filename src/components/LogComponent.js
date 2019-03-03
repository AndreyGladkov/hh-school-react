import React from "react"
import LogItem from "./LogItem"

export default function LogComponent(props) {
    const LogComponentItems = props.logComponentItems.map( (item) => {
        return <LogItem key={props.logComponentTitle + ';' + item.timestamp + ';' + item.lvl} timestamp={item.timestamp} level={item.lvl} message={item.message} /> 
    });
    return (
        <div>
            <h3>{props.logComponentTitle}</h3>
            {LogComponentItems}
            <hr/>
        </div>
    )
}