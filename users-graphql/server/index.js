import express from 'express';
import expressGraphQL from 'express-graphql';
import http from 'http';
import bodyParser from 'body-parser';
import bunyanMiddleware from 'bunyan-middleware';
import cors from 'cors';
import routes from './routes';
import { logger } from './interfaces';

import schema from './schemas/graphql/root';

const app = express();

const whitelist = process.env.CORS_WHITELIST.split(',');
const corsOptions = { origin: whitelist };

// App setup
app.use(bunyanMiddleware(logger));
app.use(bodyParser.json({ type: '*/*' }));
app.use(cors(corsOptions));
app.use('/graphql', expressGraphQL({
  // Dev tool
  graphiql: true,
  schema
}));

routes(app);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server listening at ${port}`);
});
