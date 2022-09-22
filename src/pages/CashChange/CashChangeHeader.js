import React from "react";
import classes from "./CashChangeHeader.module.css";


const CashChangeHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th className={classes.width1}>ID</th>
        <th className={classes.width2}>Date</th>
        <th className={classes.width3}>Status</th>
        <th className={classes.width4}>From</th>
        <th className={classes.width5}>To</th>
      </tr>
    </thead>
  );
};

export default CashChangeHeader;
