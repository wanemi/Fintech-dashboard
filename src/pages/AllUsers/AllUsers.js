import React, { useState, useEffect } from "react";
import classes from "./AllUsers.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import AllUsersFooter from "./AllUsersFooter";
import TotalUsers from "./TotalUsers";
import AllUsersHeader from "./AllUsersHeader";
import AllUsersItem from "./AllUsersItem";
//import authRequest from "../../logics/authRequest";
//import { goToNextPage, goToPreviousPage } from "../../logics/functions";
//import MainLoader from "../../loaders/MainLoader";


const AllUsers = (props) => {

  const size = 20;
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)



  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>All Users</h1>
        <TotalUsers />
      </div>
      <div className={classes.transaction}>
        <SearchBar />
        <button className={classes.ratebtn}>
          <span className={classes.text}>Create User</span>
        </button>
      </div>
      <Header />
      <table>
        <AllUsersHeader />
        <AllUsersItem Users={users} />
        <AllUsersFooter
        />
      </table>

    </div>
  );
};

export default AllUsers;
