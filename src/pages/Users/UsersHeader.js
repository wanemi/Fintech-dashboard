import React from "react";
import classes from "./UsersHeader.module.css";

const UsersHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th className={classes.width1}>ID</th>
        <th className={classes.width2}>Total New Users</th>
        <th className={classes.width3}>Date</th>
        <th className={classes.width4}>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default UsersHeader;
