import React, { useState, useEffect } from "react";
import classes from "./RateChange.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import RateChangeFooter from "./RateChangeFooter";
import RateChangeHeader from "./RateChangeHeader";
import RateChangeItem from "./RateChangeItem";
//import { goToNextPage, goToPreviousPage } from "../../logics/functions";
//import authRequest from "../../logics/authRequest";
//import MainLoader from "../../loaders/MainLoader";


const RateChange = () => {
  
  const size = 20;
  const [totalPage, setTotalPage] = useState(0)

  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)


  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Rate Change Logs</h1>
        <SearchBar />
      </div>
      <Header />
      <table>
        <RateChangeHeader />
        <RateChangeItem Rates={data} Page={page}/>
        <RateChangeFooter
        />
      </table>
    </div>
  );
};

export default RateChange;
