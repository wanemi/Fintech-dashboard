import React from "react";
import classes from "./RevenueLogHeader.module.css";

const RevenueLogHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th className={classes.width1}>ID</th>
        <th className={classes.width2}>Payout</th>
        <th className={classes.width3}>Dollar Payin</th>
        <th className={classes.width4}>Naira Payin</th>
        <th className={classes.width5}>Payout</th>
        <th className={classes.width6}>Naira Revenue</th>
        <th className={classes.width7}>Dollar Revenue</th>
        <th className={classes.width8}>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default RevenueLogHeader;
