import { createSlice } from "@reduxjs/toolkit";

const allProductsReducer = createSlice({
  name: "allProducts",
  initialState: [],
  reducers: {
    addProducts: (state, action) => {
      return action.payload;
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addProducts, removeProduct } = allProductsReducer.actions;
export default allProductsReducer.reducer;
