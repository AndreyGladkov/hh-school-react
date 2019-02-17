const ridUrl = 'http://localhost:9200/api/logs?rid=';
const luckyUrl = 'http://localhost:9200/api/feelinglucky';

async function getResults(request) {
  try {
    const response = await fetch(ridUrl + request);
    if (response.status === 404) {
      return {error: [{ message: 'Nothing found on Request ID ', request: `"${request}"` }]};
    }
    const responseJson = await response.json();
    return responseJson;
  } catch(err) {
    return {error: [{ message: 'Something went wrong :('}, {request: `with Request ID "${request}"` }]};
  }
}

async function getLuckyRid() {
  try {
    const response = await fetch(luckyUrl);
    const responseJson = await response.json();
    return responseJson.rid;
  } catch(err) {
    return undefined;
  }
}

export { getResults, getLuckyRid };
