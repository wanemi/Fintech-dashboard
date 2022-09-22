import React from "react";
import classes from "./PercentLogItem.module.css";
import { AiOutlineEye } from "react-icons/ai";

const PercentLogItem = ({ Percent }) => {
  return (
    <tbody className={classes.container}>
      {Percent.map((value) => (
        <tr>
          <td className={classes.text}>{value.id}</td>

          <td className={classes.text}>{value.PercentUsers}</td>

          <td className={classes.text}>{value.Returned}</td>

          <td className={classes.text}>{value.Date}</td>

          <td>
            <AiOutlineEye className={classes.icon4} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PercentLogItem;
