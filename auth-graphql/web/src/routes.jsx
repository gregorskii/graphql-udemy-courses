import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import App from 'components/app';
import Home from 'pages/home';
import Signup from 'pages/signup';
import Login from 'pages/login';
import FourOFour from 'pages/404';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" render={() => (<div>signout</div>)} />
          <Route component={FourOFour} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default AppRouter;
