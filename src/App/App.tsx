import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Account from "../Pages/Account/Account";
import Transaction from "../Pages/Transaction/Transaction";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </>
  );
}

export default App;
