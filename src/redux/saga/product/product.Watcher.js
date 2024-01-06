import { takeLatest } from "redux-saga/effects";
import {
  getAllproductHandler,
  getCategoireProductsHandler,
  getproductCartHandler,
  getproductSingleWithIDHandler,
} from "./product.Handler";
import {
  getCatagoriesSaga,
  getAllCatagoriesproductSaga,
  getSingleProductWithIDSaga,
  getAllProductSaga,
} from "../../Product.slice";

export function* getProductCartWatcher() {
  yield takeLatest(getCatagoriesSaga.type, getproductCartHandler);
}
export function* getAllProductWatcher() {
  yield takeLatest(getAllProductSaga.type, getAllproductHandler);
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
