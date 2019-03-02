const UPDATE_INPUT_VALUE_ACTION = "UPDATE_INPUT_VALUE_ACTION";
const UPDATE_LOG_DATA_ACTION = "UPDATE_LOG_DATA_ACTION";

function updateInputValue(value) {
  console.log("in updateInputValue");
  return {
    type: UPDATE_INPUT_VALUE_ACTION,
    payload: value
  };
}

function updateLogData(status, data) {
  console.log("in updateLogData");
  return {
    type: UPDATE_LOG_DATA_ACTION,
    payload: {
      searchStatus: status,
      logData: data
    }
  };
}

export function getLucky() {
  console.log("in getLucky");
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
      .then(data => dispatch(updateInputValue(data.rid)))
      .catch(erroe => dispatch(updateInputValue("123")));
  };
}

export function search(rid) {
  console.log("in search");
  return function(dispatch, getState) {
    return fetch("http://localhost:9200/api/logs?rid=" + rid)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(
          "Can't fetch response. Response status: " + response.status
        );
      }
      return response.json();
    })
    .then(data => dispatch(updateLogData("success", data)))
    .catch(error => dispatch(updateLogData("failed", [])));
  }
}

export default function logs(state = {}, { type, payload }) {
  console.log("in logs");
  switch (type) {
    case UPDATE_INPUT_VALUE_ACTION:
      console.log("UPDATE_INPUT_VALUE_ACTION");
      console.log("payload = ", payload);
      console.log("state = ", state);
      console.log("new state = ", { ...state, inputValue: payload });
      return { ...state, inputValue: payload };
    case UPDATE_LOG_DATA_ACTION:
      console.log("UPDATE_INPUT_VALUE_ACTION");
      console.log("payload = ", payload);
      console.log("state = ", state);
      console.log("new state = ", { ...state, searchStatus: payload.searchStatus, logData: payload.logData});
      return { ...state, searchStatus: payload.searchStatus, logData: payload.logData};
    default:
      return state;
  }
}
