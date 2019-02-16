import React from "react"
import LogItem from "./LogItem"

export default function LogComponent(props) {
    const LogComponentItems = props.logComponentItems.map( (item, index) => {
        return <LogItem key={index} timestamp={item.timestamp} level={item.lvl} message={item.message} /> 
    });
    return (
        <div>
            <h3>{props.logComponentTitle}</h3>
            {LogComponentItems}
            <hr/>
        </div>
    )
}