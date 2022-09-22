import React from "react";
import classes from "./TotalPayin.module.css";

const TotalPayouts = () => {
  return (
    <div className={classes.total}>
        <div>
            <span className={classes.amount}>N2.79M</span>
        </div>
        <div className={classes.container}><span className={classes.text}>Total Actual Payouts</span></div>
    </div>
  );
};

export default TotalPayouts;
