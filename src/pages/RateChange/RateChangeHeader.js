import React from "react";
import classes from "./RateChangeHeader.module.css";

const RateChangeHeader = () => {
  return (
    <thead className={classes.container}>
      <tr>
        <th scope="col">S/N</th>
        <th scope="col">Date</th>
        <th scope="col">Change By</th>
        <th scope="col">No of Rate Updated</th>
        <th scope="col">View Update</th>
      </tr>
    </thead>
  );
};

export default RateChangeHeader;
