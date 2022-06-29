import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "shoppingCart",
  initialState: [],
  reducers: {
    addToShoppingCart(state, action) {
      state.push(action.payload);
    },
    removeFromShoppingCart(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { addToShoppingCart, removeFromShoppingCart } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
