import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combineProducs";
// store redicer to global send data to reducer
const store = configureStore({
  reducer,
});

export default store;
