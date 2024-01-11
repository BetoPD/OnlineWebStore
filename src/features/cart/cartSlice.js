import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        [action.payload.product.id]: {
          ...action.payload.product,
          quantity: action.payload.quantity,
        },
      };
    },
    removeProduct: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { addProduct, removeProduct } = cartReducer.actions;
export default cartReducer.reducer;
