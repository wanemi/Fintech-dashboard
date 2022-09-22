import React, { useState, useEffect } from "react";
import classes from "./Customers.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import CustomersHeader from "./CustomersHeader";
import CustomersFooter from "./CustomersFooter";
import CustomerItem from "./CustomerItem";
//import { goToNextPage, goToPreviousPage } from "../../logics/functions";
//import MainLoader from "../../loaders/MainLoader";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const Users = [
    {
      id: "31",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "30",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "29",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "28",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "27",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "26",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "25",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "31",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "30",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "29",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "28",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "27",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "26",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
    {
      id: "25",
      Name: "Toney Samuel",
      Email: "tonysam@gmail.com",
      Date: "23-Oct-2021",
    },
  ];

  const [TotalPages] = useState(Math.ceil(Users.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Users.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }

  return (
    <div>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Customers</h1>
        <SearchBar />
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <CustomersHeader />
            <CustomerItem Users={currentPosts} />
            <CustomersFooter
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

export default Customers;
