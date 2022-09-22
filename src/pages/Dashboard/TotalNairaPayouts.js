import React from "react";
import classes from "./DailyNaira.module.css";
import { BsArrowDownLeft } from "react-icons/bs";

const TotalNairaPayouts = () => {
  return (
    <div className={classes.total}>
        <div className={classes.amount}>
            <div className={classes.icon}><BsArrowDownLeft className={classes.arrow}/></div>
            <span className={classes.dollar}>N0</span>
        </div>
        <div><span className={classes.dollar}>Total Naira Payouts</span></div>
        <div><span className={classes.txt}>No Data</span></div>
    </div>
  );
};

export default TotalNairaPayouts;
