import React from "react";
import classes from "./CustomersItem.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
//import { date } from "../../logics/functions";

const CustomerItem = ({ Users }) => {
  return (
    <tbody className={classes.container}>
      {Users.map((user) => (
        <tr>
          <td className={classes.width1}>
            <div className={classes.icon1} />
          </td>

          <td>{user.id}</td>

          <td>{user.Name} </td>

          <td>{user.Email}</td>

          <td>{user.Date}</td>

          <td>
            <button className={classes.box}>
              <span className={classes.text2}>Send Mail</span>
            </button>
          </td>
          <td className={classes.box2}>
            <AiOutlineEye className={classes.icon4} />
            <FaEdit className={classes.icon4} />
            <RiDeleteBinLine className={classes.icon4} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CustomerItem;
