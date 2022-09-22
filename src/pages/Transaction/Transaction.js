import React, { useState, useEffect } from "react";
import Result from "./Result";
import classes from "./Transaction.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import TransactionFooter from "./TransactionFooter";
import TransactionHeader from "./TransactionHeader";
import TransactionItem from "./TransactionItem";
//import authRequest from "../../logics/authRequest";
//import MainLoader from "../../loaders/MainLoader";
//import { goToNextPage, goToPreviousPage } from "../../logics/functions";

const Transaction = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage] = useState(10);

  const TDetails = [
    {
      id: "01",
      TransactionRef: "1ffrb65800",
      Type: "debit",
      Date: "23-Oct-2021",
      Status: "Success",
      currency: "Dollars",
      Amount: "$100",
    },
    {
      id: "02",
      TransactionRef: "bbcd231v00",
      Type: "Credit",
      Date: "25-Oct-2021",
      Status: "Success",
      currency: "Naira",
      Amount: "N50,000",
    },
    {
      id: "03",
      TransactionRef: "443g665b0k",
      Type: "debit",
      Date: "26-Oct-2021",
      Status: "Success",
      currency: "Dollars",
      Amount: "$200",
    },
    {
      id: "04",
      TransactionRef: "fbbcc33907",
      Type: "Credit",
      Date: "27-Oct-2021",
      Status: "Success",
      currency: "Naira",
      Amount: "N100,000",
    },
    {
      id: "05",
      TransactionRef: "f22aps9h0o",
      Type: "debit",
      Date: "27-Oct-2021",
      Status: "Success",
      currency: "Dollars",
      Amount: "$50",
    },
  ];

  const [TotalPages] = useState(Math.ceil(TDetails.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = TDetails.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Transactions</h1>
        <Result />
      </div>
      <div className={classes.transaction}>
        <SearchBar />
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <TransactionHeader />
            <TransactionItem TDetails={currentPosts} />
            <TransactionFooter
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

export default Transaction;
