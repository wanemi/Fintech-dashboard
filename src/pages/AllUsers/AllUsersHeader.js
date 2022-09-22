import React from "react";
import classes from "./AllUsersHeader.module.css";


const AllUsersHeader = () => {
  return (
    <thead className={classes.container}>
      <tr >
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Registered At</th>
          <th>Phone</th>
          <th>Email Verified</th>
          <th>Phone Verified</th>
      </tr>
    </thead>
  );
};

export default AllUsersHeader;
