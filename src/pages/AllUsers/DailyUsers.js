import React from "react";
import classes from "./DailyUsers.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const DailyUsers = () => {
  return (
    <div className={classes.daily}>
      <div className={classes.section}>
        <span className={classes.txt}>New Users Today</span>
        <button className={classes.box}>
          <span className={classes.text2}>30 Days</span>
          <RiArrowDropDownLine className={classes.icon2} />
        </button>
      </div>
      <p className={classes.txt2}>0</p>
    </div>
  );
};

export default DailyUsers;
