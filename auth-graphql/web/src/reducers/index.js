import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import AuthReducer from './auth';

export default (client) => {
  return combineReducers({
    apollo: client.reducer(),
    form: FormReducer,
    auth: AuthReducer
  });
};
