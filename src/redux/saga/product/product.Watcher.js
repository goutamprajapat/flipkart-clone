import { takeLatest } from "redux-saga/effects";
import {
  getCategoireProductsHandler,
  getproductCartHandler,
  getproductSingleWithIDHandler,
} from "./product.Handler";
import {
  getCatagoriesSaga,
  getAllCatagoriesproductSaga,
  getSingleProductWithIDSaga,
} from "../../Product.slice";

export function* getProductCartWatcher() {
  yield takeLatest(getCatagoriesSaga.type, getproductCartHandler);
}
export function* getSingleProductWithIDWatcher() {
  yield takeLatest(
    getSingleProductWithIDSaga.type,
    getproductSingleWithIDHandler
  );
}
export function* getProductCartListWatcher() {
  yield takeLatest(
    getAllCatagoriesproductSaga.type,
    getCategoireProductsHandler
  );
}
