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
import Dashboard from 'pages/dashboard';
import FourOFour from 'pages/404';
import PrivateRoute from 'components/private-route';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" render={() => (<div>signout</div>)} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route component={FourOFour} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default AppRouter;
