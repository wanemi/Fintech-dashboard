import React, {useState, useEffect} from "react";
import classes from "./DailyDollar.module.css";
import { BsArrowDownLeft } from "react-icons/bs";
//import authRequest from "../../logics/authRequest";
//import { handleFunds } from "../../logics/functions";


const TotalDollarPayin = () => {
  


  return (
    <div className={classes.total}>
        <div className={classes.amount}>
            <div className={classes.icon}><BsArrowDownLeft className={classes.arrow}/></div>
            <span className={classes.dollar}>$</span>
        </div>
        <div><span className={classes.dollar}>Total Dollar Payins</span></div>
        <div><span className={classes.txt}>No Data</span></div>
    </div>
  );
};

export default TotalDollarPayin;
