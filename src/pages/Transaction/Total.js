import React, { useState, useEffect } from "react";
import classes from "./Total.module.css";
//import authRequest from "../../logics/authRequest";
//import { handleFunds } from "./../../logics/functions";

const Total = () => {

  

  return (
    <div className={classes.total}>
      <span className={classes.txt}>Total Transactions</span>
      <p className={classes.txt2}></p>
    </div>
  );
};

export default Total;
