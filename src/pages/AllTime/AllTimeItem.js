import React from "react";
import classes from "./AllTimeItem.module.css";
import { AiOutlineEye } from "react-icons/ai";

const AllTimeItem = ({ AllTimeProfit }) => {
  return (
    <tbody className={classes.container}>
      {AllTimeProfit.map((all) => (
        <tr>
          <td className={classes.text}>{all.id}</td>

          <td className={classes.text}>{all.From}</td>

          <td className={classes.text}>{all.To}</td>

          <td className={classes.text}>{all.Payins}</td>

          <td className={classes.text}>{all.Payouts}</td>

          <td className={classes.text}>{all.Profit}</td>

          <td className={classes.text}>{all.If}</td>
          <td className={classes.text}>{all.Rate}</td>

          <td>
            <AiOutlineEye className={classes.icon4} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AllTimeItem;
