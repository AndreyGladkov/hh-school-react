import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";

export default function SearchForm(props) {
  const { rid, onFormActions } = props;
  const { onFeelingLucky, onInput, onSearch } = onFormActions;
  return (
    <form>
      <FormGroup row={true}>
        <TextField
          style={{ flex: 1 }}
          value={rid}
          onChange={e => onInput(e.target.value)}
        />
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => onSearch(rid)}
        >
          Search
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={onFeelingLucky}
        >
          {"I'm feeling lucky"}
        </Button>
      </FormGroup>
    </form>
  );
}
