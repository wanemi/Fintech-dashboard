import React from "react";
import classes from "./TransactionHeader.module.css";

const TransactionHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th className={classes.width1}>&nbsp;</th>
        <th className={classes.width2}>Transaction ref</th>
        <th className={classes.width3}>Type</th>
        <th className={classes.width4}>Date</th>
        <th className={classes.width5}>Status</th>
        <th className={classes.width6}>Currency</th>
        <th className={classes.width7}>Amount</th>
      </tr>
    </thead>
  );
};

export default TransactionHeader;
