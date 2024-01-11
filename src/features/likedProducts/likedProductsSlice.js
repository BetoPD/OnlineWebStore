import { createSlice } from "@reduxjs/toolkit";

const likedProductsReducer = createSlice({
  name: "likedProducts",
  initialState: [],
  reducers: {
    addLikedProduct: (state, action) => {
      state.push(action.payload);
    },
    removeLikedProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addLikedProduct, removeLikedProduct } =
  likedProductsReducer.actions;
export default likedProductsReducer.reducer;
