import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combineProducs";
import createSagaMiddleware from "redux-saga";
import { rootCagategorySaga } from "./saga/root.Saga";
// store redicer to global send data to reducer
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootCagategorySaga);
export default store;
