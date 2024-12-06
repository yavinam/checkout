import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";
import Wishes from "../pages/wishes/Wishes";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
