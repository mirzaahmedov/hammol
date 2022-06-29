import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";

import Header from "@components/Header";

import Home from "@views/Home";
import ShoppingCart from "@views/ShoppingCart";
import Product from "@views/Product";
import NotFound from "@views/NotFound";

import store from "@store/redux";

const Styles = createGlobalStyle`
  :root {
    --primary: #1e88e5;
    --primary-lighter: #42a5f5;
    --primary-darker: #0d47a1;
    --text: #000000;
    --text-lighter: #333333;
    --grey: #9e9e9e;
  }

  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-size: 16px;
    font-family: "Lato", sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Styles />
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
