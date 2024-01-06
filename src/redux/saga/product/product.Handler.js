import { call, put } from "redux-saga/effects";
import {
  getProductService,
  getSingleProductWithID,
  getproductCategorie,
} from "./product.service";
import {
  getSingleProduct,
  saveCatagories,
  saveProducts,
} from "../../Product.slice";

export function* getproductCartHandler() {
  try {
    const data = yield call(getProductService);
    yield put(saveCatagories(data));
  } catch (error) {
    console.log("server error");
  }
}

export function* getproductSingleWithIDHandler(action) {
  try {
    let id = action.payload;
    console.log(id);
    const data = yield call(getSingleProductWithID, id);
    yield put(getSingleProduct(data));
  } catch (error) {
    console.log("server error");
  }
}

export function* getCategoireProductsHandler(action) {
  try {
    let categorie = action.payload;

    const data = yield call(getproductCategorie, categorie);

    yield put(saveProducts(data));
  } catch (error) {
    console.log("server error");
  }
}
