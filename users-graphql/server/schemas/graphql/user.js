
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import SERVICES from '../../services';
import { CompanyType } from './index';

const {
  getCompanyByIdWrapped
} = SERVICES;

const UserType = new GraphQLObjectType({
  // Defines the name of the object in the graph
  name: 'User',
  // Fields
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue) {
        return getCompanyByIdWrapped(parentValue.companyId);
      }
    }
  })
});

export default UserType;
