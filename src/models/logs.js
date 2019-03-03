const UPDATE_LOG_DATA_ACTION = "UPDATE_LOG_DATA_ACTION";

function updateLogData(status, data) {
  return {
    type: UPDATE_LOG_DATA_ACTION,
    payload: {
      searchStatus: status,
      logData: data
    }
  };
}

export function search(rid) {
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
  };
}

export default function logs(state = {}, { type, payload }) {
  switch (type) {
    case UPDATE_LOG_DATA_ACTION:
      return {
        ...state,
        searchStatus: payload.searchStatus,
        logData: payload.logData
      };
    default:
      return state;
  }
}
