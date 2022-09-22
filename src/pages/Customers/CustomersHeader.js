import React from "react";
import classes from "./CustomersHeader.module.css";

const CustomersHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th>&nbsp;</th>
        <th>ID</th>

        <th>Name</th>

        <th>Email</th>

        <th>Created</th>

        <th className={classes.width6}>&nbsp;</th>
        <th className={classes.width7}>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default CustomersHeader;
