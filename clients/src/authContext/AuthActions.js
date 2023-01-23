export const loginStart = () => ({
    type: "LOGIN START",
});
export const loginSuccess = (user) =>( {
    type: "LOGIN_SUCCESS",
    payload: user,
});
export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});
//logout

export const logout = () => ({
    type: "LOGOUT",
  });