function beautifyResponse(response) {
  let services = {};
  if (response) {
    Object.keys(response).forEach((service, index) => {
      services[service] = [];
      response[service].forEach(element => {
        let subserviceInfo = '';
        Object.keys(element).forEach(infoLine => {
          subserviceInfo += element[infoLine] + ' ';
        });
        services[service].push(subserviceInfo);
      });
    });
  }
  return services;
}

export { beautifyResponse }
