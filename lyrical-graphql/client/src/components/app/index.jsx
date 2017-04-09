import React from 'react';

import 'styles/base.global.scss';

const App = ({ children }) => (<div>{children}</div>);

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
