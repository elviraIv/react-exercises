import { configureStore } from "redux";

export const store = configureStore({
  reducer: counterSlice.reducer,
});
