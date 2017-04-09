import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLNonNull
} from 'graphql';

import SERVICES from '../../services';

import { UserType, CompanyType } from './index';

const {
  getUserByIdWrapped,
  getCompanyByIdWrapped,
  createUserWrapped,
  deleteUserWrapped,
  editUserWrapped
} = SERVICES;

// Links query to type
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      // Where you go into the database and find what we actually want
      resolve(parentValue, args) {
        // Resolve accepts returns on promises, waits then returns
        return getUserByIdWrapped(args.id);
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return getCompanyByIdWrapped(args.id);
      }
    }
  })
});

// Defines mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Name of mutation
    addUser: {
      // NOTE May not always return the same type
      type: UserType,
      // New fields to mutate with
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return createUserWrapped(args);
      }
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, args) {
        return deleteUserWrapped(args.id);
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return editUserWrapped(args);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation
});
