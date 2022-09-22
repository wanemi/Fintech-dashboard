import React, { useState } from "react";
import classes from "./PayOuts.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import PayOutsFooter from "./PayOutsFooter";
import PayOutsHeader from "./PayOutsHeader";
import PayOutsItem from "./PayOutsItem";

const PayOuts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const Pay = [
    {
      id: "31",
      Mode: "Live",
      Date: "23-Oct-2021, 11:11:31am",
      Status: "Success",
      UserName: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Reference: "1ffrb65800",
    },
    {
      id: "30",
      Mode: "Live",
      Date: "23-Oct-2021, 11:11:31am",
      Status: "Success",
      UserName: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Reference: "bbcd231v00",
    },
    {
      id: "29",
      Mode: "Live",
      Date: "23-Oct-2021, 11:11:31am",
      Status: "Success",
      UserName: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Reference: "443g665b0k",
    },
    {
      id: "28",
      Mode: "Live",
      Date: "23-Oct-2021, 11:11:31am",
      Status: "Success",
      UserName: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Reference: "fbbcc33907",
    },
    {
      id: "27",
      Mode: "Live",
      Date: "23-Oct-2021, 11:11:31am",
      Status: "Success",
      UserName: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Reference: "f22aps9h0o",
    },
    {
      id: "26",
      Mode: "Live",
      Date: "23-Oct-2021, 11:11:31am",
      Status: "Success",
      UserName: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Reference: "f22aps9h0o",
    },
    {
      id: "25",
      Mode: "Live",
      Date: "23-Oct-2021, 11:11:31am",
      Status: "Success",
      UserName: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Reference: "f22aps9h0o",
    },
  ];

  const [TotalPages] = useState(Math.ceil(Pay.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Pay.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Payouts</h1>
      </div>
      <div className={classes.rate}>
        <SearchBar />
        <button className={classes.ratebtn}>
          <span className={classes.text}>Create Rate</span>
          <span className={classes.view}>Rate</span>
        </button>
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <PayOutsHeader />
            <PayOutsItem Pay={currentPosts} />
            <PayOutsFooter
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

export default PayOuts;
