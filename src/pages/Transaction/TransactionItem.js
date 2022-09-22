import React from "react";
//import { date } from "../../logics/functions";
import classes from "./TransactionItem.module.css";

const TransactionItem = ({ TDetails }) => {
  return (
    <tbody className={classes.container}>
      {TDetails.map((TDetails) => (
        <tr>
          <td>
            <div className={classes.icon1} />
          </td>
          <td>{TDetails.TransactionRef}</td>
          <td>{TDetails.Type}</td>
          <td>{TDetails.Date}</td>
          <td>{TDetails.Status}</td>
          <td>{TDetails.currency}</td>
          <td>{TDetails.Amount}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TransactionItem;
