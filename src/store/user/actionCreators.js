import actionTypes from "./actionTypes";

export const loginSuccess = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: data,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});
