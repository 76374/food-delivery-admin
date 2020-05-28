const { Environment, Network, RecordSource, Store } = require('relay-runtime');
const axios = require('axios').default;

const { apiPath } = require('./consts/path');

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return axios.post(apiPath, {
    query: operation.text,
    variables,
  }).then(response => {
    return response.data;
  });
});

const environment = new Environment({
  network,
  store,
});

export default environment;
