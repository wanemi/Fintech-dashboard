import React from "react";
import classes from "./AdminUsersItem.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const AdminUsersItem = ({ Admin }) => {
  return (
    <tbody>
      {Admin.map((user) => (
        <tr className={classes.container}>
          <td>
            <div className={classes.icon1} />
          </td>

          <td>{user.userId}</td>

          <td>
            <HiPhotograph className={classes.icon4} />
          </td>

          <td>{user.firstName} {user.lastName}</td>

          <td>{user.email}</td>

          <td>{user.role}</td>

          <td>
            <AiOutlineCheckCircle className={classes.icon5} />
          </td>
          <td>
            <button className={classes.box}>
              <span className={classes.text2}>Actions</span>
              <RiArrowDropDownLine className={classes.icon2} />
            </button>
          </td>
          <td className={classes.box2}>
            <AiOutlineEye className={classes.icon3} />
            <FaEdit className={classes.icon3} />
            <RiDeleteBinLine className={classes.icon3} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AdminUsersItem;
