import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../CounterSlice/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
