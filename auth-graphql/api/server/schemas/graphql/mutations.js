import {
  GraphQLObjectType
} from 'graphql';

import signup from './mutations/signup';
import login from './mutations/login';
import logout from './mutations/logout';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    signup,
    login,
    // NOTE: ignoring logout on the server, as there is no session to revoke
    logout
  })
});

export default mutation;
