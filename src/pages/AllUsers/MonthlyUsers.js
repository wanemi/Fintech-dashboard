import React from "react";
import classes from "./MonthlyUsers.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const MonthlyUsers = () => {
  return (
    <div className={classes.monthly}>
      <div className={classes.section}>
        <span className={classes.txt}>Total Users</span>
        <button className={classes.box}>
          <span className={classes.text2}>30 Days</span>
          <RiArrowDropDownLine className={classes.icon2} />
        </button>
      </div>
      <p className={classes.txt2}>30</p>
    </div>
  );
};

export default MonthlyUsers;
