const LOAD_LOG_ACTION = "LOAD_LOG_ACTION";

const apiURL = "http://localhost:9200/api";


export function loadLog(logData){
    return {
        type: LOAD_LOG_ACTION,
        payload: logData
    }
}

export function fetchLog(reqId) {
    return function(dispatch, getState) {
        return fetch(apiURL+ '/logs?rid=' + reqId)
            .then(response => response.json())
            .then(data => dispatch(loadLog(data)))
            .catch(error => console.error(error));
    };
}

export default function logs(state = {}, { type, payload }) {
    console.log("type:" + type);
    switch (type) {
        case LOAD_LOG_ACTION:
            console.log("payload="+JSON.stringify(payload));
            return payload;
        default:
            console.log("return default state");
            return state;
    }
}