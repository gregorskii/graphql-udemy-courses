import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createStorybookListener from 'storybook-addon-redux-listener';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import getReducers from 'reducers';

const networkInterface = createNetworkInterface({
  uri: `${process.env.API_URL}/graphql`
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Reducers = getReducers(client);
const middlewares = [client.middleware()];

if (process.env.NODE_ENV === 'storybook') {
  const reduxListener = createStorybookListener();
  middlewares.push(reduxListener);
}

const createStoreWithMiddleware = (reducers) => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

const store = createStoreWithMiddleware(Reducers);

export { store, client };
