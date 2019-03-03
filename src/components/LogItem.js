import React from "react"

export default function LogItem(props) {
    return (
        <div>
            <div>
                <span>{props.timestamp + ' '}</span>
                <span className={props.level === 'ERROR' ? 'errorLogItem': 'normalLogItem'}>{props.level}</span>
                <span>{' ' + props.message}</span>
            </div>
            <br/>
        </div>
    )
}