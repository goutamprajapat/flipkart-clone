import { all } from "redux-saga/effects";
import {
  getProductCartListWatcher,
  getProductCartWatcher,
  getSingleProductWithIDWatcher,
} from "./product/product.Watcher";

export function* rootCagategorySaga() {
  const arr = [
    getProductCartWatcher(),
    getProductCartListWatcher(),
    getSingleProductWithIDWatcher(),
  ];
  yield all(arr);
}
