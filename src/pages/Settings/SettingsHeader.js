import React from "react";
import classes from "./SettingsHeader.module.css";

const SettingsHeader = () => {
  return (
    <thead className={classes.container}>
        <tr>
          <th className={classes.width1} scope="col">
            ID
          </th>
          <th className={classes.width1} scope="col">
            Flat Fee($)
          </th>
          <th className={classes.width2} scope="col">
            Flutterwave Fee(N)
          </th>
          <th className={classes.width3}>Commision(%)</th>
          <th className={classes.width4} scope="col">
            &nbsp;
          </th>
        </tr>
      </thead>
  );
};

export default SettingsHeader;
