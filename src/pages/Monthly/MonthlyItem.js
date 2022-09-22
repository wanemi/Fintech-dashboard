import React from "react";
import classes from "./MonthlyItem.module.css";
import { AiOutlineEye } from "react-icons/ai";

const MonthlyItem = ({ MonthlyProfit }) => {
  return (
    <tbody className={classes.container}>
      {MonthlyProfit.map((month) => (
        <tr>
          <td className={classes.text}>{month.id}</td>
          <td className={classes.text}>{month.From}</td>
          <td className={classes.text}>{month.To}</td>

          <td className={classes.text}>{month.Payins}</td>
          <td className={classes.text}>{month.Payouts}</td>
          <td className={classes.text}>{month.Profit}</td>
          <td className={classes.text}>{month.If}</td>
          <td className={classes.text}>{month.Rate}</td>
          <td>
            <AiOutlineEye className={classes.icon4} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default MonthlyItem;
