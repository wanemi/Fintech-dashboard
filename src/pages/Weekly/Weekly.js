import React, { useState } from "react";
import classes from "./Weekly.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import WeeklyFooter from "./WeeklyFooter";
import WeeklyHeader from "./WeeklyHeader";
import WeeklyItem from "./WeeklyItem";

const Weekly = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const WeeklyProfit = [
    {
      id: "10",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "09",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "08",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "07",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "06",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "05",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "04",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "03",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "02",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
    {
      id: "01",
      From: "3-Oct-2021",
      To: "3-Oct-2021",
      Payins: " $0.00",
      Payouts: "N0.00",
      Profit: "N0.00",
      If: "",
      Rate: "",
    },
  ];

  const [TotalPages] = useState(Math.ceil(WeeklyProfit.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = WeeklyProfit.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Weekly Profits</h1>
        <SearchBar />
      </div>
      <Header />
      <table>
      <WeeklyHeader />
      <WeeklyItem WeeklyProfit={currentPosts} />
      <WeeklyFooter
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        TotalPages={TotalPages}
        currentPage={currentPage}
      />
      </table>
    </div>
  );
};

export default Weekly;
