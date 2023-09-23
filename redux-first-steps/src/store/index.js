import { configureStore } from "redux";

import counterReducer from "./counter";
import authReducer from "./auth";

export const store = configureStore({
  reducer: counterReducer,
  auth: authReducer,
});
