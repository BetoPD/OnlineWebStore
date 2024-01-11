import { configureStore } from "@reduxjs/toolkit";
import likedProductsReducer from "../features/likedProducts/likedProductsSlice";
import cartReducer from "../features/cart/cartSlice";
import allProductsReducer from "../features/allProducts/allProductsSlice";

const store = configureStore({
  reducer: {
    likedProducts: likedProductsReducer,
    cart: cartReducer,
    allProducts: allProductsReducer,
  },
});

export default store;
