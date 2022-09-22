import React from "react";
import classes from "./RatesHeader.module.css";

const RateHeader = () => {

  return (
    <thead className={classes.container}>
      <tr> 
        <th> Country </th> <th> Currency </th> <th> Code </th> 
        <th> Symbol </th> <th> Exchange Rate </th> <th> Action </th>
      </tr>
    </thead>
  );
};

export default RateHeader;
