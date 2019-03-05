import { combineReducers } from "redux";

const SET_RID = "SET_RID";
const SHOW_LOGS = "SHOW_LOGS";

// Reducers
const rid = (state = "", action) => {
  switch (action.type) {
    case SET_RID:
      return action.rid;
    default:
      return state;
  }
};

const found = (state = null, action) => {
  switch (action.type) {
    case SHOW_LOGS:
      return action.response.found;
    default:
      return state;
  }
};

const message = (state = null, action) => {
  switch (action.type) {
    case SHOW_LOGS:
      return action.response.message;
    default:
      return state;
  }
};

const reducer = combineReducers({ rid, found, message });

export default reducer;

// Actions
export const feelingLucky = () => async dispatch =>
  await fetch("http://localhost:9200/api/feelinglucky")
    .then(response => response.json())
    .then(data => ({ type: SET_RID, rid: dispatch(setRID(data.rid)) }));

export const setRID = rid => ({
  type: SET_RID,
  rid: rid
});

export const getLogs = rid => dispatch =>
  fetch(`http://localhost:9200/api/logs?rid=${rid}`)
    .then(response =>
      response.ok
        ? response.json().then(found => ({ found: found, message: null }))
        : response.text().then(message => ({ found: null, message: message }))
    )
    .then(response => dispatch(updateLogs(response)));

const updateLogs = response => ({
  type: SHOW_LOGS,
  response: response
});
