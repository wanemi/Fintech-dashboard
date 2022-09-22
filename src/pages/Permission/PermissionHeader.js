import React from "react";
import classes from "./PermissionHeader.module.css";


const PermissionHeader = () => {
  return (
    <thead className={classes.container}>
      <tr >
        <th className={classes.width8}>&nbsp;</th>
        <th className={classes.width1}>ID</th>
        <th className={classes.width2}>
          Guard Name
        </th>

        <th className={classes.width3}>Name</th>

        <th className={classes.width4}>Created At</th>

        <th className={classes.width5}>Updated At</th>

        <th className={classes.width6}>Roles</th>

        <th className={classes.width7}>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default PermissionHeader;
