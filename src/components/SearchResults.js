import React, { Fragment } from "react";

export default function SearchResults(props) {
  return (
    <div className="search-result-wrapper">
        <Fragment>
            {props.message ? <p className="search-result-message">{props.message}</p> : null}
            {props.found ?
              Object.keys(props.found).map(key => (
                <div className="search-result-section">
                    <h2>{key}</h2>
                    {props.found[key].map(record => (
                      <p className="search-result-item">
                          <span>{record.timestamp}</span>
                          <span>{record.level}</span>
                          <span>{record.message}</span>
                      </p>
                    ))}
                </div>))
             : null}
    </Fragment>
      </div>)
}
