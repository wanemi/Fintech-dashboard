import React from "react";
import classes from "./PayOutsItem.module.css";

const PayOutsItem = ({ Pay }) => {
  return (
    <tbody className={classes.container}>
      {Pay.map((pay) => (
        <tr>
          <td className={classes.text}>
            <div className={classes.icon1} />
          </td>

          <td className={classes.text}>{pay.id}</td>
          <td className={classes.text3}>{pay.Mode}</td>

          <td className={classes.text}>{pay.Date}</td>

          <td className={classes.text3}>{pay.Status}</td>

          <td className={classes.text}>{pay.UserName}</td>
          <td className={classes.text}>{pay.Email}</td>
          <td className={classes.text}>{pay.Reference}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default PayOutsItem;
