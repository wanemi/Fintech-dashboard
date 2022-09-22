import React from "react";
import classes from "./PercentageLogHeader.module.css";


const PercentageLogHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th className={classes.width1}>ID</th>
        <th className={classes.width2}>Percentage of users Returned</th>
        <th className={classes.width3}>Returned Users</th>
        <th className={classes.width4}>Date</th>
        <th className={classes.width5}></th>
      </tr>
    </thead>
  );
};

export default PercentageLogHeader;
