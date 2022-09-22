import React, { useState } from "react";
import classes from "./Yearly.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import WeeklyHeader from "../Weekly/WeeklyHeader";
import YearlyItem from "./YearlyItem";
import YearlyFooter from "./YearlyFooter";

const Yearly = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const YearlyProfit = [
    {
      id: "02",
      From: "01-Jan-2021",
      To: "31-Dec-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "01",
      From: "01-Jan-2020",
      To: "31-Dec-2020",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
  ];

  const [TotalPages] = useState(Math.ceil(YearlyProfit.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = YearlyProfit.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Yearly Profits</h1>
        <SearchBar />
      </div>
      <Header />
      <table>
        <WeeklyHeader />
        <YearlyItem YearlyProfit={currentPosts} />
        <YearlyFooter
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          TotalPages={TotalPages}
          currentPage={currentPage}
        />
      </table>
    </div>
  );
};

export default Yearly;
