import React, { useState } from "react";
import classes from "./PercentageLog.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import PercentageLogHeader from "./PercentageLogHeader";
import PercentLogItem from "./PercentLogItem";
import PercentLogFooter from "./PercentLogFooter";

const PercentageLog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const Percent = [
    {
      id: "02",
      PercentUsers: "1%",
      Returned: "2",
      Date: "04-Jun-2021",
    },
    {
      id: "01",
      PercentUsers: "0%",
      Returned: "5",
      Date: "04-Jun-2021",
    },

    {
      id: "01",
      PercentUsers: "0%",
      Returned: "2",
      Date: "04-Jun-2021",
    },
    {
      id: "01",
      PercentUsers: "7%",
      Returned: "2",
      Date: "04-Jun-2021",
    },
    {
      id: "01",
      PercentUsers: "1%",
      Returned: "2",
      Date: "04-Jun-2021",
    },
  ];

  const [TotalPages] = useState(Math.ceil(Percent.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Percent.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }
  return (
    <div>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Percentage Logins</h1>
        <SearchBar />
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <PercentageLogHeader />
            <PercentLogItem Percent={currentPosts} />
            <PercentLogFooter
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

export default PercentageLog;
