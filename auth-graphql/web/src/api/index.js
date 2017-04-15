import * as TestApi from './test';
import currentUserQuery from './queries/current-user';
import loginMutation from './mutations/login';
import logoutMutation from './mutations/logout';

export default {
  requests: {
    ...TestApi
  },
  queries: {
    currentUserQuery
  },
  mutations: {
    loginMutation,
    logoutMutation
  }
};
