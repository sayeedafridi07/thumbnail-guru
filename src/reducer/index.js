import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import modalReducer from "../slices/modalSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  modal: modalReducer,
});

export default rootReducer;
