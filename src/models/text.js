import {loadLog} from "./log";

const LOAD_TEXT_ACTION = "LOAD_TEXT_ACTION";

const apiURL = "http://localhost:9200/api";

export function loadText(textData) {
    return {
        type: LOAD_TEXT_ACTION,
        payload: textData
    }
}

export function fetchText() {
    return function (dispatch, getState) {
        dispatch(loadLog({}));
        dispatch(loadText({text: "Loading ..."}));
        return fetch(apiURL + '/feelinglucky')
            .then(response => response.json())
            .then(data => {
                dispatch(loadText(data));
                dispatch(loadLog({}));
            })
            .catch(error => console.error(error));
    };
}

export default function logs(state = {}, {type, payload}) {
    switch (type) {
        case LOAD_TEXT_ACTION:
            return payload;
        default:
            return state;
    }
}