import React from "react";
import classes from "./WeeklyItem.module.css";
import { AiOutlineEye } from "react-icons/ai";

const WeeklyItem = ({ WeeklyProfit }) => {
  return (
    <tbody className={classes.container}>
      {WeeklyProfit.map((week) => (
        <tr >
          <td className={classes.text}>{week.id}</td>
          <td className={classes.text}>{week.From}</td>
          <td className={classes.text}>{week.To}</td>
          <td className={classes.text}>{week.Payins}</td>
          <td className={classes.text}>{week.Payouts}</td>
          <td className={classes.text}>{week.Profit}</td>
          <td className={classes.text}>{week.If}</td>
          <td className={classes.text}>{week.Rate}</td>
          <td>
            <AiOutlineEye className={classes.icon4} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default WeeklyItem;
