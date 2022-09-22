import React, { useState, useEffect } from "react";
import classes from "./RevenueLogs.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import RevenueLogsFooter from "./RevenueLogsFooter";
import RevenueLogHeader from "./RevenueLogHeader";
import RevenueLogItem from "./RevenueLogItem";
//import { goToNextPage, goToPreviousPage } from "../../logics/functions";
//import authRequest from "../../logics/authRequest";

const RevenueLogs = () => {
  
  const size = 20;
  const [totalPage, setTotalPage] = useState(0)

  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  
  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Revenue Logs</h1>
        <SearchBar />
      </div>
      <Header />
      <table>
        <RevenueLogHeader />
        <RevenueLogItem Revenue={data} />
        <RevenueLogsFooter
        />
      </table>
    </div>
  );
};

export default RevenueLogs;
