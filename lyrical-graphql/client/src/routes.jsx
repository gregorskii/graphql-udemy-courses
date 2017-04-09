import React from 'react';
import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router';

import App from 'components/app';
import Home from 'pages/home';
import SongCreate from 'pages/song-create';
import SongDetail from 'pages/song-detail';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/songs/new" component={SongCreate} />
        <Route path="/songs/:id" component={SongDetail} />
      </Route>
    </Router>
  );
};

export default AppRouter;
