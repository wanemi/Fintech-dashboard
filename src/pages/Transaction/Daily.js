import React, {useState, useEffect} from "react";
import classes from "./Daily.module.css";
//import authRequest from "../../logics/authRequest";
//import { handleFunds } from "../../logics/functions";
//import TransactionPlot from "../../Charts/TransactionPlot";

const Daily = () => {

  const [data, setData] = useState([])
  const [days, setDays] = useState(30)
  const [total, setTotal] = useState('Loading...')
  const [plotData, setPlotData] = useState([])

  
  
  return (
    <div className={classes.daily}>
      <div className={classes.section}>
        <span className={classes.txt}>Transaction Today</span>

        <select placeholder="30" className={classes.box}>
          <option value="7">7 Days</option>
          <option value="15">15 Days</option>
          <option value="30" selected>30 Days</option>
          <option value="60">60 Days</option>
          <option value="120">120 Days</option>
          <option value="240">240 Days</option>
          <option value="365">365 Days</option>
        </select>

      </div>
    </div>
  );
};

export default Daily;
