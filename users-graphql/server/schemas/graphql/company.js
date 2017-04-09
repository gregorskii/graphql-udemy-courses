import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

import SERVICES from '../../services';
import { UserType } from './index';

const {
  getUsersForCompanyIdWrapped
} = SERVICES;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      // Multiples get wrapped in List
      type: new GraphQLList(UserType),
      resolve(parentValue) {
        return getUsersForCompanyIdWrapped(parentValue.id);
      }
    }
  })
});

export default CompanyType;
