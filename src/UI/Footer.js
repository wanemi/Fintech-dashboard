import React from "react";
import classes from "./Footer.module.css";
import { useState } from "react";

const Footer = () => {
    

  return (
    <tfoot className={classes.container}>
      <tr>
        <td className={classes.text}>
          Previous
        </td>
        <td colspan="3" className={classes.text}>1 0f 1</td>
        <td  className={classes.text1}>
          Next
        </td>
      </tr>
    </tfoot>
  );
};

export default Footer;
