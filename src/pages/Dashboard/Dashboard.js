import React, {useEffect} from "react";
import classes from "./Dashboard.module.css";
import DailyDollarPayin from "./DailyDollarPayin";
import DailyNairaPayout from "./DailyNairaPayout";
import TotalNairaPayouts from "./TotalNairaPayouts";
import TotalDollarPayin from "./TotalDollarPayin";
import TotalPayins from "./TotalPayins";
import TotalPayouts from "./TotalPayouts";
//import authRequest from "../../logics/authRequest";
//import Login from "../Login/Login";
//import SpinnerLoader from "../../loaders/SpinnerLoader";

const Dashboard = () => {

  

  
  return (
    <div className={classes.Dashboard}>
      <div className={classes.txt}>
        <h1 className={classes.header}>Dashboard</h1>
      </div>
      <div className={classes.card}>
        <DailyDollarPayin />
        <DailyNairaPayout />
        <TotalPayins />
      </div>
      <div className={classes.card}>
        <TotalDollarPayin />
        <TotalNairaPayouts />
        <TotalPayouts />
      </div>
    </div>
  );
};

export default Dashboard;
