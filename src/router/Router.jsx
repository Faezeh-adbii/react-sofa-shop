import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import Organization from "../pages/Organization";
import InstallmentSales from "../pages/InstallmentSales";
import Contact from "../pages/Contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/installmentSales" element={<InstallmentSales />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
