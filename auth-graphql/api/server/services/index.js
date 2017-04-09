import bodyParser from 'body-parser';
import bunyanMiddleware from 'bunyan-middleware';
import cors from 'cors';

import { logger } from '../interfaces';
import auth from './auth';
import session from './session';
import graphql from './graphql';

export default (app) => {
  const whitelist = process.env.CORS_WHITELIST.split(',');
  const corsOptions = { origin: whitelist };

  // App setup
  app.use(bunyanMiddleware(logger));
  app.use(bodyParser.json({ type: '*/*' }));
  app.use(cors(corsOptions));

  session(app);
  auth(app);
  graphql(app);
};
