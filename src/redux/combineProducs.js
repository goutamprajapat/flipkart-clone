import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./Product.slice";

// call combineReducers to combine multiple data
const reducer = combineReducers({
  products: ProductSlice,
});
export default reducer;
