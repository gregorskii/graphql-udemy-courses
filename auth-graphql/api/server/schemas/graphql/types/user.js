import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

const UserQueryType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    token: { type: GraphQLString }
  })
});

export default UserQueryType;
