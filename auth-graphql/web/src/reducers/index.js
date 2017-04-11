import { combineReducers } from 'redux';

export default (client) => {
  return combineReducers({
    apollo: client.reducer()
  });
};
