import bodyParser from 'body-parser';
import bunyanMiddleware from 'bunyan-middleware';
import cors from 'cors';

import { logger } from '../interfaces';
import passport from './passport';
import graphql from './graphql';
import jwt from './jwt';

export default (app) => {
  const whitelist = process.env.CORS_WHITELIST.split(',');
  const corsOptions = {
    origin: whitelist
  };

  // App setup
  app.use(bunyanMiddleware(logger));
  app.use(bodyParser.json({ type: '*/*' }));
  app.use(cors(corsOptions));
  app.use(passport.initialize());

  jwt(app);
  graphql(app);
};
