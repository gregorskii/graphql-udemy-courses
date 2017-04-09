import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import UserType from './types/user';
import AuthController from '../../controllers/auth';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthController.signup({ email, password, req });
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthController.login({ email, password, req });
      }
    }
  })
});

export default mutation;
