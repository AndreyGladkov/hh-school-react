import React, { Fragment } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default function Search(props) {
  return (
    <Fragment>
      <SearchForm rid={props.rid} onFormActions={props.onFormActions} />
      <SearchResults found={props.found} message={props.message} />
    </Fragment>
  );
}
