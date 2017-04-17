import * as TestApi from './test';
import currentUserQuery from './queries/current-user';
import signupMutation from './mutations/signup';
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
    signupMutation,
    loginMutation,
    logoutMutation
  }
};
