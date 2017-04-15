import React from 'react';
import PropTypes from 'prop-types';

import 'styles/base.global.scss';
import Header from 'components/header';

const App = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
