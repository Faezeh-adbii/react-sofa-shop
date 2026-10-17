import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import Organization from "../pages/Organization";
import InstallmentSales from "../pages/InstallmentSales";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import CategoryPage from "../pages/CategoryPage";
import Products from "../pages/Products";
import Login from "../pages/auth/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/installmentSales" element={<InstallmentSales />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={ <Products/> } />
      <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/login" element={ <Login/> } />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
