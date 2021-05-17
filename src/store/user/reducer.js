import loginActionTypes from "./actionTypes";

const userInitialState = {
  name: "",
  email: "",
  role: "",
  token: "",
  isAuth: false,
};

const coursesReducer = (state = userInitialState, { type, payload }) => {
  switch (type) {
    case loginActionTypes.LOGIN_SUCCESS:
      return {
        name: payload.name,
        email: payload.email,
        token: payload.token,
        isAuth: true,
        role: payload.role,
      };
    case loginActionTypes.LOGOUT_SUCCESS:
      return userInitialState;
    default:
      return state;
  }
};

export default coursesReducer;
