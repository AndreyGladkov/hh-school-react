const ADD_SEARCH_RESULTS_ACTION = "ADD_SEARCH_RESULTS";

export function addSearchResult(searchResult) {
    return {
        type: ADD_SEARCH_RESULTS_ACTION,
        payload: searchResult
    };
}

export function fetchLogs(rid) {
    return function(dispatch, getState) {
        return fetch(`http://localhost:9200/api/logs?rid=${rid}`)
            .then(response => {
                if (response.status !== 200) {
                    return {Oops: [{message: "Something wrong with request ID"}]};
                }
                return response.json();
            })
            .then(data => {
                dispatch(addSearchResult(data));
            })
            .catch(error => console.error(error));
    };
}

export default function searchResults(state = {}, { type, payload }) {
    switch (type) {
        case ADD_SEARCH_RESULTS_ACTION:
            console.log('state');
            console.log(state);
            console.log('newState');
            console.log({ ...state, response: payload });
            return { ...state, response: payload };
        default:
            return state;
    }
}
