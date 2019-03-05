import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";

import { connect } from "react-redux";
import { setRID, feelingLucky, getLogs } from "../store";

const SearchFormButton = ({ onClick, children }) => (
  <Button
    size="small"
    variant="outlined"
    color="primary"
    onClick={onClick}
    children={children}
  />
);

const SearchForm = props => (
  <form>
    <FormGroup row={true}>
      <TextField
        style={{ flex: 1 }}
        value={props.rid}
        onChange={e => props.setRID(e.target.value)}
      />
      <SearchFormButton onClick={() => props.getLogs(props.rid)}>
        Search
      </SearchFormButton>
      <SearchFormButton onClick={props.feelingLucky}>
        {"I'm feeling lucky"}
      </SearchFormButton>
    </FormGroup>
  </form>
);

const mapStateToProps = ({ rid }) => ({ rid });
const mapDispatchToProps = { setRID, feelingLucky, getLogs };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
