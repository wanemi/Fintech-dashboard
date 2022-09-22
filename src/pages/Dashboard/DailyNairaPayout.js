import React, {useState, useEffect} from "react";
import classes from "./DailyNaira.module.css";
import { BsArrowDownLeft } from "react-icons/bs";
//import authRequest from "../../logics/authRequest";
//import { handleFunds } from "./../../logics/functions"

const DailyNairaPayout = () => {
  

  return (
    <div className={classes.total}>
        <div className={classes.amount}>
            <div className={classes.icon}><BsArrowDownLeft className={classes.arrow}/></div>
            <span className={classes.dollar}>N</span>
        </div>
        <div><span className={classes.dollar}>Naira Payouts Today</span></div>
        <div><span className={classes.txt}>No Data</span></div>
    </div>
  );
};

export default DailyNairaPayout;
