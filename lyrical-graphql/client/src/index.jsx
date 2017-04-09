import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import AppRouter from 'src/routes';

// Setup Apollo Client, configures client realtionships within data in the client
// store
const client = new ApolloClient({
  // All data is run through this function, result is used to identify data within
  // the apollo client, use the id to identify the data
  // Have to ask for the ID on every record of the query
  dataIdFromObject: o => o.id
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>,
  document.querySelector('.container')
);
