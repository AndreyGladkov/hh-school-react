import React from "react";

export default function SearchResults(props) {
  return (
    <div className="search-result-wrapper">
      {props.message ? (
        <p className="search-result-message">{props.message}</p>
      ) : null}
      {props.found
        ? Object.keys(props.found).map(key => (
            <div className="search-result-section" key={key}>
              <h2>{key}</h2>
              {props.found[key].map((record, index) => (
                <p
                  className="search-result-item"
                  key={record.message.split("\t")[0] + record.timestamp}
                >
                  <span>{record.timestamp}</span>
                  <span>{record.level}</span>
                  <span>{record.message}</span>
                </p>
              ))}
            </div>
          ))
        : null}
    </div>
  );
}
