import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "@store/products.reducer";
import shoppingCartReducer from "@store/shoppingCart.reducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
