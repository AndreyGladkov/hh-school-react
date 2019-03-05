import {loadText} from "./text";

const LOAD_LOG_ACTION = "LOAD_LOG_ACTION";

const apiURL = "http://localhost:9200/api";

export function loadLog(logData) {
    return {
        type: LOAD_LOG_ACTION,
        payload: logData
    }
}

export function fetchLog(reqId) {
    return function (dispatch, getState) {
        dispatch(loadText({text: "Loading ..."}));
        return fetch(apiURL + '/logs?rid=' + reqId)
            .then(response => response.json())
            .then(data => {
                dispatch(loadLog(data));
                dispatch(loadText({}))
            })
            .catch(error => console.error(error));
    };
}

export default function logs(state = {}, {type, payload}) {
    switch (type) {
        case LOAD_LOG_ACTION:
            return payload;
        default:
            return state;
    }
}