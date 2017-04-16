import {
  GraphQLString
} from 'graphql';

import UserType from '../types/user';
import AuthController from '../../../controllers/auth';

export default {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parentValue, { email, password }, req) {
    return AuthController.signup({ email, password, req });
  }
};
