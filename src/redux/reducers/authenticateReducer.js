let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  console.log("액션", action);
  let { type, payload } = action;
  if (type === "LOGIN_SUCCESS") {
    return {
      ...state,
      id: payload.id,
      password: payload.password,
      authenticate: true,
    };
  } else if (type === "LOGOUT_SUCCESS") {
    return {
      ...state,
      authenticate: false,
    };
  }
  return { ...state };
}

export default authenticateReducer;
