import ACTIONS from 'actions';

const {
  AUTH_LOGOUT
} = ACTIONS;

const INITIAL_STATE = {
  authenticated: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
    default:
      return { ...state, authenticated: !!localStorage.getItem('token') };
  }
};
