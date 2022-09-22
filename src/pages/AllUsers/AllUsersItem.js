import React from "react";
//import { date } from "../../logics/functions";
import classes from "./AllUsersItem.module.css";



const AllUsersItem = ({Users}) => {
  

  return (
    <tbody className={classes.container}>
      {Users.map(user => <tr >
          <td>{user.userId}</td>
          <td></td>
          <td>{user.email}</td>
          <td></td>
          <td>{user.phone}</td>
          <td>{user.emailVerified? "Yes" : "No"}</td>
          <td>{user.phoneVerified? "Yes" : "No"}</td>
      </tr>)}
    </tbody>
  );
};

export default AllUsersItem;
