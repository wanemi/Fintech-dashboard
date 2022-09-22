import React, { useState, useEffect } from "react";
import classes from "./CashChange.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import CashChangeHeader from "./CashChangeHeader";
import CashChangeItem from "./CashChangeItem";
import CashChangeFooter from "./CashChangeFooter";
//import authRequest from "../../logics/authRequest";
//import { goToNextPage, goToPreviousPage } from "../../logics/functions";
//import MainLoader from "../../loaders/MainLoader";

const CashChange = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage] = useState(10);

  const Change = [
    {
      id: "01",
      Date: "23-Oct-2021",
      Status: "Success",
      OriginAmount: "Naira",
      currency: "Dollar",
    },
    {
      id: "02",
      Date: "25-Oct-2021",
      Status: "Success",
      OriginAmount: "Dollar",
      currency: "Naira",
    },
    {
      id: "03",
      Date: "26-Oct-2021",
      Status: "Success",
      OriginAmount: "Naira",
      currency: "Dollar",
    },
    {
      id: "04",
      Date: "27-Oct-2021",
      Status: "Success",
      OriginAmount: "Dollar",
      currency: "Naira",
    },
    {
      id: "05",
      Date: "27-Oct-2021",
      Status: "Success",
      OriginAmount: "Naira",
      currency: "Dollar",
    },
  ];

  const [TotalPages] = useState(Math.ceil(Change.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Change.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }

  return (
    <div>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Cash Change Logs</h1>
        <SearchBar />
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <CashChangeHeader />
            <CashChangeItem Change={currentPosts} />
            <CashChangeFooter
              goToNextPage={goToNextPage}
              goToPreviousPage={goToPreviousPage}
              TotalPages={TotalPages}
              currentPage={currentPage}
            />
          </div>
        </table>
      </div>
    </div>
  );
};

export default CashChange;
