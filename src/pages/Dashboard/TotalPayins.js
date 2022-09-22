import React, {useState, useEffect} from "react";
import classes from "./TotalPayin.module.css";
//import authRequest from "./../../logics/authRequest";
//import { handleFunds } from "../../logics/functions";

const TotalPayins = () => {

  

  return (
    <div className={classes.total}>
        <div>
            <span className={classes.amount}>N</span>
        </div>
        <div className={classes.container}><span className={classes.text}>Total Actual Payins</span></div>
    </div>
  );
};

export default TotalPayins;
