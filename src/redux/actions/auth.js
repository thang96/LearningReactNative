export const Login_SUCCESS = 'Login_SUCCESS';
export const UPDATE_AUTH = 'UPDATE_AUTH';
export const updateAuth = auth => {
  return {
    type: UPDATE_AUTH,
    payload: auth,
  };
};
