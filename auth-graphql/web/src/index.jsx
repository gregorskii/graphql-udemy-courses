import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from 'src/routes';
import store from 'src/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('.container')
);
