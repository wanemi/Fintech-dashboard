import React from "react";
import classes from "./AdminUsersHeader.module.css";

const AdminUsersHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th>&nbsp;</th>

        <th>ID</th>

        <th>Image</th>

        <th>Name</th>

        <th>Email</th>

        <th>Role</th>

        <th>is Admin ?</th>

        <th>&nbsp;</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default AdminUsersHeader;
