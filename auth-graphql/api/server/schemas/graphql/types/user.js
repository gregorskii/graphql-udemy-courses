import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

const UserQueryType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLID }
  })
});

export default UserQueryType;
