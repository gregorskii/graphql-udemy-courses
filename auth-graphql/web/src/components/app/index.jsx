import React from 'react';

import 'styles/base.global.scss';
import Header from 'components/header';

const App = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
