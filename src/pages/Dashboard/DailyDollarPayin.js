import React from "react";
import classes from "./DailyDollar.module.css";
import { BsArrowDownLeft } from "react-icons/bs";

const DailyDollarPayin = () => {
  return (
    <div className={classes.total}>
        <div className={classes.amount}>
            <div className={classes.icon}><BsArrowDownLeft className={classes.arrow}/></div>
            <span className={classes.dollar}>0$</span>
        </div>
        <div><span className={classes.dollar}>Dollar Payins Today</span></div>
        <div><span className={classes.txt}>No Data</span></div>
    </div>
  );
};

export default DailyDollarPayin;
