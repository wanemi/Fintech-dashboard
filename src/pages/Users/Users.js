import React, { useState } from "react";
import classes from "./Users.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import UsersHeader from "./UsersHeader";
import UsersFooter from "./UsersFooter";
import UsersItem from "./UsersItem";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const User = [
    {
      id: "02",
      New: "1",
      Date: "05-Oct-2021",
    },
    {
      id: "02",
      New: "1",
      Date: "05-Oct-2021",
    },
  ];

  const [TotalPages, setTotalPages] = useState(Math.ceil(User.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = User.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }

  if (TotalPages < 1) {
    setTotalPages(1);
  }

  return (
    <div>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>User Register Logs</h1>
        <SearchBar />
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <UsersHeader />
            <UsersItem User={currentPosts} />
            <UsersFooter
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

export default Users;
