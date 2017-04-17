export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const logout = () => {
  localStorage.clear('token');

  return {
    type: AUTH_LOGOUT
  };
};
