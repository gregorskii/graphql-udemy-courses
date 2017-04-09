import {
  GraphQLSchema,
} from 'graphql';

import RootType from './types/root';
import mutation from './mutations';

const Schema = new GraphQLSchema({
  query: RootType,
  mutation
});

export default Schema;
