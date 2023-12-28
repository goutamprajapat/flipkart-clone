import { all } from "redux-saga/effects";
import {
  getProductCartListWatcher,
  getProductCartWatcher,
} from "./product/product.Watcher";

export function* rootCagategorySaga() {
  const arr = [getProductCartWatcher(), getProductCartListWatcher()];
  yield all(arr);
}
