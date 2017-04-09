import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const UserQueryType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    email: { type: GraphQLString }
  })
});

export default UserQueryType;
