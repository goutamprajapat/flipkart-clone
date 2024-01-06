import { all } from "redux-saga/effects";
import {
  getAllProductWatcher,
  getProductCartListWatcher,
  getProductCartWatcher,
  getSingleProductWithIDWatcher,
} from "./product/product.Watcher";

export function* rootCagategorySaga() {
  const arr = [
    getProductCartWatcher(),
    getProductCartListWatcher(),
    getSingleProductWithIDWatcher(),
    getAllProductWatcher(),
  ];
  yield all(arr);
}
