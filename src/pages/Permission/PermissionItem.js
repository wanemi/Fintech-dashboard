import React from "react";
import classes from "./PermissionItem.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const PermissionItem = ({ Role }) => {
  return (
    <tbody>
      {Role.map((user) => (
        <tr className={classes.container}>
          <td>
            <div className={classes.icon1} />
          </td>

          <td className={classes.text}>{user.id}</td>

          <td className={classes.text}>{user.Guard}</td>

          <td className={classes.text}>{user.Name}</td>

          <td className={classes.text}>{user.Created}</td>

          <td className={classes.text}>{user.Updated}</td>

          <td className={classes.text}>{user.Roles}</td>

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

export default PermissionItem;
