import {
  GraphQLObjectType
} from 'graphql';

import UserType from './user';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType
    }
  })
});

export default RootQueryType;
