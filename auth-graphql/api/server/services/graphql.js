import expressGraphQL from 'express-graphql';

import schema from '../schemas/graphql';

export default (app) => {
  app.use('/graphql', expressGraphQL({ schema }));
};
