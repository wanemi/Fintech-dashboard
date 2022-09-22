import React from "react";
import classes from "./RateChangeItem.module.css";
import { AiOutlineEye } from "react-icons/ai";
//import { date } from "../../logics/functions";

const RateChangeItem = ({ Rates, Page }) => {
  return (
    <tbody className={classes.container}>
      {Rates.map((rate, index) => (
        <tr>
          <td>{index + 1 + Page}</td>
          <td>{}</td>
          <td>{rate.updatedBy}</td>
          <td>{rate.from.length}</td>
          <td className={classes.space5}>
            <AiOutlineEye
              className={classes.icon4}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RateChangeItem;
