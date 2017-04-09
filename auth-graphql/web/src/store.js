import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createStorybookListener from 'storybook-addon-redux-listener';
import promise from 'redux-promise';

import Reducers from 'reducers';

const middlewares = [promise];

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

export default store;
