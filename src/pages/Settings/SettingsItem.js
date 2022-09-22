import React from "react";
import classes from "./SettingsItem.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const SettingsItem = ({ settings }) => {
  return (
    <tbody className={classes.container}>
        {settings.map((setting) => (
          <tr>
            <td className={classes.text}>{setting.id}</td>
            <td className={classes.text}>{setting.FlatFee}</td>
            <td className={classes.text}>{setting.charges}</td>
            <td className={classes.text}>{setting.percent}</td>
            <td className={classes.box2}>
              <button className={classes.box}>
                <span className={classes.text2}>Actions</span>
                <RiArrowDropDownLine className={classes.icon2} />
              </button>
              <AiOutlineEye className={classes.icon4} />
              <FaEdit className={classes.icon4} />
            </td>
          </tr>
        ))}
      </tbody>
  );
};

export default SettingsItem;
