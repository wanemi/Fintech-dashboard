import React, { useState, useEffect } from "react";
import classes from "./AdminUsers.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import AdminUsersHeader from "./AdminUsersHeader";
import AdminUsersItem from "./AdminUsersItem";
import AdminUserFooter from "./AdminUserFooter";
//import { goToNextPage, goToPreviousPage } from "../../logics/functions";
//import authRequest from "../../logics/authRequest";

const AdminUsers = () => {
  
  const size = 20;
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(1)
  const [totalPage, setTotalPage] = useState(0)


  //useEffect(() => {
    
    //const request = authRequest()

    //const query = `admin/users?role=admin&page=${page * size}&size=${size}`;

    //request.axios.get(process.env.REACT_APP_HOST + query).then(res => {

      //setUsers(res.data.data)
      //setCount(res.data.count)

    //}, err => {

    //})

    //return () => request.cancelToken
    
  //}, [page])

  //useEffect(()=> {
    //setTotalPage(Math.ceil(count / size))
  //}, [count])

  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Admin User</h1>
      </div>
      <div className={classes.rate}>
        <SearchBar />
        <button className={classes.ratebtn}>
          <span className={classes.text}>Create Admin</span>
        </button>
      </div>
      <Header />
      <table>
        <AdminUsersHeader />
        <AdminUsersItem Admin={users} />
        <AdminUserFooter
        />
      </table>
    </div>
  );
};

export default AdminUsers;
