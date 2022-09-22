import React from "react";
import classes from "./PayOutsHeader.module.css";

const PayOutsHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th className={classes.width1}>
          <div className={classes.icon1} />
        </th>
        <th className={classes.width2}>ID</th>
        <th className={classes.width3}>Mode</th>
        <th className={classes.width4}>Date</th>
        <th className={classes.width5}>Status</th>
        <th className={classes.width6}>Username</th>
        <th className={classes.width7}>User Email</th>
        <th className={classes.width8}>Reference</th>
      </tr>
    </thead>
  );
};

export default PayOutsHeader;
