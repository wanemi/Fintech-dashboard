import React, { useState } from "react";
import classes from "./AllTime.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import WeeklyHeader from "../Weekly/WeeklyHeader";
import AllTimeItem from "./AllTimeItem";
import AllTimeFooter from "./AllTimeFooter";

const AllTime = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const AllTimeProfit = [
    {
      id: "01",
      From: "20-Sep-2020",
      To: "05-Oct-2021 ",
      Payins: "$10,000",
      Payouts: "N3M",
      Profit: "N1.5M",
      If: "",
      Rate: "",
    },
  ];

  const [TotalPages] = useState(Math.ceil(AllTimeProfit.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = AllTimeProfit.slice(indexOfFirstPost, indexOfLastPost);

  

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }
  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>All Time Profits</h1>
        <SearchBar />
      </div>
      <Header />
      <table>
        <WeeklyHeader />
        <AllTimeItem AllTimeProfit={currentPosts} />
        <AllTimeFooter
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          TotalPages={TotalPages}
          currentPage={currentPage}
        />
      </table>
    </div>
  );
};

export default AllTime;
