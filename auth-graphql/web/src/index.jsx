import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import AppRouter from 'src/routes';
import { store, client } from 'src/store';

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <AppRouter />
  </ApolloProvider>,
  document.querySelector('.container')
);
