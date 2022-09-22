import React from "react";
import classes from "./YearlyItem.module.css";
import { AiOutlineEye } from "react-icons/ai";

const YearlyItem = ({ YearlyProfit }) => {
  return (
    <tbody className={classes.container}>
      {YearlyProfit.map((year) => (
        <tr>
          <td className={classes.text}>{year.id}</td>

          <td className={classes.text}>{year.From}</td>
          <td className={classes.text}>{year.To}</td>
          <td className={classes.text}>{year.Payins}</td>
          <td className={classes.text}>{year.Payouts}</td>
          <td className={classes.text}>{year.Profit}</td>
          <td className={classes.text}>{year.If}</td>
          <td className={classes.text}>{year.Rate}</td>
          <td>
            <AiOutlineEye className={classes.icon4} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default YearlyItem;
