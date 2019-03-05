import React from "react";
import { connect } from "react-redux";

const recordKey = record => record.message.split("\t")[0] + record.timestamp;

const Message = ({ message }) =>
  message ? <p className="search-result-message">{message}</p> : null;

const Record = ({ record }) => (
  <p className="search-result-item">
    <span>{record.timestamp}</span>
    <span>{record.level}</span>
    <span>{record.message}</span>
  </p>
);

const LogGroup = ({ groupKey, items }) => (
  <div className="search-result-section">
    <h2>{groupKey}</h2>
    {items.map(record => (
      <Record record={record} key={recordKey(record)} />
    ))}
  </div>
);

const Found = ({ found }) =>
  found
    ? Object.keys(found).map(key => (
        <LogGroup groupKey={key} items={found[key]} key={key} />
      ))
    : null;

const SearchResults = props => (
  <div className="search-result-wrapper">
    <Message message={props.message} />
    <Found found={props.found} />
  </div>
);

const mapStateToProps = ({ found, message }) => ({ found, message });

export default connect(mapStateToProps)(SearchResults);
