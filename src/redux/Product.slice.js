import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// ! create a product slice form redux toolkit
const isLogedIn = Cookies.get("islogedIn");

// let user = JSON.parse(localStorage.getItem("islogedIn"));
const ProductSlice = createSlice({
  name: "ProductSlice",
  // ! create inital state
  initialState: {
    allproduct: [],
    productList: [],
    singleProduct: {},
    catagoires: [],
    cart: [],
    isLogedIn: isLogedIn || false,
  },
  // ! call the reducer function

  reducers: {
    // using saga
    getAllProductSaga: (state, action) => {},
    getCatagoriesSaga: (state, action) => {},
    getAllCatagoriesproductSaga: (state, action) => {},
    getSingleProductWithIDSaga: (state, action) => {},

    loginUser: (state, action) => {
      Cookies.set("islogedIn", action.payload, {
        expires: 1,
      });

      state.isLogedIn = isLogedIn;
    },
    getAllproductlist: (state, action) => {
      state.allproduct = action.payload;
    },
    // save product form productlisr
    saveProducts: (state, action) => {
      state.productList = action.payload;
    },

    // get Single Product
    getSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    // get product catagorie wise
    saveCatagories: (state, action) => {
      state.catagoires = action.payload;
    },
    // put data form cart
    addtoCart: (state, action) => {
      let index = state.cart.findIndex((cart) => cart.id === action.payload.id);
      if (index !== -1) {
        state.cart[index].Qty += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    // remove single product in carts
    removeCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },

    // check product quntity and add more quantity
    manageQuantity: (state, action) => {
      const { sign, index } = action.payload;
      if (sign === "+") {
        state.cart[index].Qty += 1;
      } else {
        if (state.cart[index].Qty === 1) {
          state.cart.splice(action.payload, 1);
        } else {
          state.cart[index].Qty -= 1;
        }
      }
    },
  },
});

// export reducer function
export const {
  getAllproductlist,
  getAllProductSaga,
  saveProducts,
  saveCatagories,
  addtoCart,
  removeCart,
  manageQuantity,
  getCatagoriesSaga,
  getSingleProduct,
  getAllCatagoriesproductSaga,
  getSingleProductWithIDSaga,
  loginUser,
} = ProductSlice.actions;
export default ProductSlice.reducer;
