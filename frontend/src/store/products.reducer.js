import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: null,
    itemsCount: 0,
    itemsPerPage: 10,
    pagesCount: 0,
    activePage: 1,
  },
  reducers: {
    setProducts(state, action) {
      state.items = action.payload.products;
      state.itemsCount = action.payload.count;
      state.pagesCount = Math.ceil(action.payload.count / state.itemsPerPage);
    },
    nextPage(state) {
      if (state.activePage === state.pagesCount) return state;
      state.activePage += 1;
    },
    prevPage(state) {
      if (state.activePage === 1) return state;
      state.activePage -= 1;
    },
    navigatePage(state, action) {
      if (state.pagesCount < action.payload) return state;
      state.activePage = action.payload;
    },
  },
});

export const { setProducts, nextPage, prevPage, navigatePage } =
  productsSlice.actions;

export default productsSlice.reducer;
