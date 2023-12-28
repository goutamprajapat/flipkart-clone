import { takeLatest } from "redux-saga/effects";
import {
  getCategoireProductsHandler,
  getproductCartHandler,
} from "./product.Handler";
import {
  getCatagoriesSaga,
  getAllCatagoriesproductSaga,
} from "../../Product.slice";

export function* getProductCartWatcher() {
  yield takeLatest(getCatagoriesSaga.type, getproductCartHandler);
}
export function* getProductCartListWatcher() {
  yield takeLatest(
    getAllCatagoriesproductSaga.type,
    getCategoireProductsHandler
  );
}
