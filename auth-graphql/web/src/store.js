import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createStorybookListener from 'storybook-addon-redux-listener';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import getReducers from 'reducers';

const networkInterface = createNetworkInterface({
  uri: `${process.env.API_URL}/graphql`
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    const token = localStorage.getItem('token');
    if (token) {
      req.options.headers.token = token;
    }
    next();
  }
}]);

networkInterface.useAfter([{
  applyAfterware({ response }, next) {
    const responseClone = response.clone();
    responseClone.json().then((data) => {
      if (data.data.login && data.data.login.token) {
        localStorage.setItem('token', data.data.login.token);
      }
    });
    next();
  }
}]);

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
