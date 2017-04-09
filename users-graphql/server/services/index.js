import * as UsersApi from './users';
import * as CompaniesApi from './companies';

export default {
  ...UsersApi,
  ...CompaniesApi
};
