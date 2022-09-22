import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavBar from "../UI/NavBar";
import Dashboard from "../components/Icons/Dashboard.png";
import RateChange from "../components/Icons/RateChange.png";
import settings from "../components/Icons/settings.png";
import Rates from "../components/Icons/Rates.png";
import Transaction from "../components/Icons/Transaction.png";
import payout from "../components/Icons/payout.png";
import multi from "../components/Icons/multi.png";
// import payroll from "../components/Icons/payroll.png";
// import revenue from "../components/Icons/Revenue.png";
// import Dollar from "../components/Icons/Dollar.png";
import change from "../components/Icons/change.png";
import customer from "../components/Icons/customer.png";
import close from "../components/Icons/close.png";
import users from "../components/Icons/users.png";
import classes from "./Menu.module.css";
import logo from "../logo.png";
//import logout from "../logics/logout";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAccess, setShowAccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevshowMenu) => !prevshowMenu);
  };
  const toggleAccess = () => {
    setShowAccess((prevshowAccess) => !prevshowAccess);
  };
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Link to="/">
          <span>
            Dashboard
          </span>
        </Link>
      </div>
      <NavBar Link="/" src={Dashboard} text="Dashboard" />
      <div className={classes.control}>
        <h3 className={classes.text}>Control</h3>
        <div onClick={toggleMenu} className={classes.icon2}>
          <img alt="" src={close} />
        </div>
      </div>
      {showMenu && (
        <div>
          <NavBar Link="/setting" src={settings} text="Site Settings" />
          {/*<NavBar Link="/rate" src={Rates} text="Rates" />*/}
          <NavBar
            className={classes.notAvailable}
            Link="/payout"
            src={payout}
            text="PayOuts"
          />
          {/*<NavBar
            Link="/rate-change"
            src={RateChange}
            text="Rates Change Logs"
      />*/}
          <NavBar Link="/transaction" src={Transaction} text="Transactions" />
          {/*
        
            <NavBar className={classes.notAvailable} Link="/payout" src={payout} text="PayOuts" />
            <NavBar className={classes.notAvailable} Link="/permission" src={multi} text="Multi Transfers" />
            <NavBar Link="/allusers" src={payroll} text="PayRolls" />
            <NavBar className={classes.notAvailable} Link="/revenue" src={revenue} text="Revenue Logs" />
            <NavBar className={classes.notAvailable} Link="/weekly" src={Dollar} text="Weekly Profit" />
            <NavBar className={classes.notAvailable} Link="/monthly" src={Dollar} text="Monthly Profit" />
            <NavBar className={classes.notAvailable} Link="/yearly" src={Dollar} text="Yearly Profit" />
            <NavBar  className={classes.notAvailable} Link="/alltime" src={Dollar} text="All Time Profit" />
           
            */}
          <NavBar Link="/cashchange" src={change} text="Cash Change Logs" />
          <NavBar Link="/customers" src={customer} text="Customers" />
          <hr className={classes.border}></hr>
        </div>
      )}
      <NavBar Link="/users" src={users} text="Users" />
      <NavLink to="/percentlog" className={classes.side}>
        <span className={classes.text2}>Percentage Logins</span>
      </NavLink>
      <div className={classes.control2}>
        <h3 className={classes.text}>Access Control</h3>
        <div onClick={toggleAccess} className={classes.icon2}>
          <img alt="" src={close} />
        </div>
      </div>
      {showAccess && (
        <div>
          <NavLink to="/permission" className={classes.side}>
            <span className={classes.text2}>Permission</span>
          </NavLink>
        </div>
      )}

    </div>
  );
};

export default Menu;
