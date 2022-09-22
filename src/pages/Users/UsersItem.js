import React from "react";
import classes from "./UsersItem.module.css";
import { AiOutlineEye } from "react-icons/ai";

const UsersItem = ({ User }) => {
  return (
    <tbody className={classes.container}>
      {User.map((users) => (
        <tr>
          <td className={classes.text}>{users.id}</td>
          <td className={classes.text}>{users.New}</td>

          <td className={classes.text}>{users.Date}</td>
          <td>
            <AiOutlineEye className={classes.icon4} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UsersItem;
