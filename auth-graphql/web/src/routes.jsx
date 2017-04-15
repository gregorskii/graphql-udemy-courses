import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import App from 'components/app';
import Home from 'pages/home';
import FourOFour from 'pages/404';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={() => (<div>login</div>)} />
          <Route path="/signup" render={() => (<div>signup</div>)} />
          <Route path="/signout" render={() => (<div>signout</div>)} />
          <Route component={FourOFour} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default AppRouter;
