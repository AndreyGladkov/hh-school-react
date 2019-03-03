const UPDATE_RID_ACTION = "UPDATE_RID_ACTION";

function updateRid(value) {
  return {
    type: UPDATE_RID_ACTION,
    payload: value
  };
}

export function updateInputValue(value) {
  return function(dispatch, getState) {
    dispatch(updateRid(value));
  };
}

export function getLucky() {
  return function(dispatch, getState) {
    return fetch("http://localhost:9200/api/feelinglucky")
      .then(response => {
        if (response.status !== 200) {
          throw new Error(
            "Can't fetch response. Response status: " + response.status
          );
        }
        return response.json();
      })
      .then(data => dispatch(updateRid(data.rid)))
      .catch(error => dispatch(updateRid("")));
  };
}

export default function params(state = {}, { type, payload }) {
  switch (type) {
    case UPDATE_RID_ACTION:
      return { ...state, inputValue: payload };
    default:
      return state;
  }
}
