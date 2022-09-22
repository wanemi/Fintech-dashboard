import React from "react";
import classes from "./WeeklyHeader.module.css";


const WeeklyHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th className={classes.width1}>ID</th>

        <th className={classes.width2}>From</th>
        <th className={classes.width3}>To</th>
        <th className={classes.width4}>Total Payins</th>
        <th className={classes.width5}>Total Payouts</th>
        <th className={classes.width6}>Total Profits</th>
        <th className={classes.width7}>
          Profit vs IF
          (N)
        </th>
        <th className={classes.width8}>
          Rate right Now 
          (N/$)
        </th>
        <th className={classes.width9}>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default WeeklyHeader;
