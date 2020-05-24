import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { registerReducer } from "./register";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
});

export default rootReducer;
