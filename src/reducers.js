import { combineReducers } from "redux";

import { SET_RID, SHOW_LOGS } from "./actions";

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
