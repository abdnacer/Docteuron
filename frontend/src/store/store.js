import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

// const rootReducer = combineReducers({
//   auth: authReducer.reducer,
// });

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
