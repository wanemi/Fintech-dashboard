import React from "react";
//import { date } from "../../logics/functions";
import classes from "./CashChangeItem.module.css";

const CashChangeItem = ({ Change }) => {
  return (
    <tbody >
      {Change.map((change) => (
        <tr className={classes.container}>
          <td className={classes.text}>{change.id}</td>

          <td className={classes.text}>{change.Date}</td>

          <td className={classes.text}>{change.Status}</td>

          <td className={classes.text3}>{change.OriginAmount}</td>

          <td className={classes.text}>{change.currency}</td>

        </tr>
      ))}
    </tbody>
  );
};

export default CashChangeItem;
