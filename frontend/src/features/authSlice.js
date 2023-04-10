import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  message: null,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      const { user, token } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      const newState = {
        ...state,
        isLogged: true,
        message: "LOGIN SUCCESS",
        user,
        token,
      };
      return newState
    },
    LOGIN_FAILED: (state) => {
      return {
        ...state,
        isLogged: false,
        message: "LOGIN NOT SUCCESS",
        user: null,
        token: null,
      };
    },
    LOGOUT: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        isLogged: false,
        message: "LOGOUT SUCCESS",
        user: null,
        token: null,
      };
    },
  },
});

export const { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
