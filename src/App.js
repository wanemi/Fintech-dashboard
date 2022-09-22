import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import RateChange from "./pages/RateChange/RateChange";
import Rate from "./pages/Rates/Rate";
import Settings from "./pages/Settings/Settings";
import Transaction from "./pages/Transaction/Transaction";
import MultiTransfer from "./pages/MultiTransfer/MultiTransfer";
import Menu from "./Sidebar/Menu";
import ResponsiveHeader from "./Sidebar/ResponsiveHeader";
import PayOuts from "./pages/PayOuts/PayOuts";
import PayRolls from "./pages/PayRolls/PayRolls";
import RevenueLogs from "./pages/RevenueLogs/RevenueLogs";
import Weekly from "./pages/Weekly/Weekly";
import Monthly from "./pages/Monthly/Monthly";
import Yearly from "./pages/Yearly/Yearly";
import AllTime from "./pages/AllTime/AllTime";
import CashChange from "./pages/CashChange/CashChange";
import Customers from "./pages/Customers/Customers";
import Users from "./pages/Users/Users";
import AllUsers from "./pages/AllUsers/AllUsers";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import PercentageLog from "./pages/PercentageLog/PercentageLog";
import Permission from "./pages/Permission/Permission";
//import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="content">
      <header className="navbar">
        <Menu />
      </header>

      <ResponsiveHeader />
      <main className="overview">
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/rate-change">
            <RateChange />
          </Route>
          <Route path="/rate">
            <Rate />
          </Route>
          <Route path="/setting">
            <Settings />
          </Route>
          <Route path="/transaction">
            <Transaction />
          </Route>
          <Route path="/payout">
            <PayOuts />
          </Route>
          <Route path="/multi">
            <MultiTransfer />
          </Route>
          <Route path="/payroll">
            <PayRolls />
          </Route>
          <Route path="/revenue">
            <RevenueLogs />
          </Route>
          <Route path="/weekly">
            <Weekly />
          </Route>
          <Route path="/monthly">
            <Monthly />
          </Route>
          <Route path="/yearly">
            <Yearly />
          </Route>
          <Route path="/alltime">
            <AllTime />
          </Route>
          <Route path="/cashchange">
            <CashChange />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/allusers">
            <AllUsers />
          </Route>
          <Route path="/permission">
            <Permission />
          </Route>
          <Route path="/percentlog">
            <PercentageLog />
          </Route>
          <Route path="/adminuser">
            <AdminUsers />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
