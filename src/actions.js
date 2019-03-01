export const SET_RID = "UPDATE_RID";
export const SHOW_LOGS = "UPDATE_LOGS";

export const feelingLucky = () => async dispatch =>
  await fetch("http://localhost:9200/api/feelinglucky")
    .then(response => response.json())
    .then(data => ({ type: SET_RID, rid: dispatch(setRID(data.rid)) }));

export const setRID = rid => ({
  type: SET_RID,
  rid: rid
});

export const getLogs = rid => async dispatch =>
  await fetch(`http://localhost:9200/api/logs?rid=${rid}`)
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
