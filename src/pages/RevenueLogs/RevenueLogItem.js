import React from "react";
import classes from "./RevenueLogItem.module.css";
import { AiOutlineEye } from "react-icons/ai";



const RevenueLogItem = ({Revenue}) => {
    
  return (
    <tbody className={classes.container}>
      {Revenue.map(revenue => <tr>
        <td className={classes.text}>{revenue.ID}</td>
        <td className={classes.text}>{revenue.Payout}</td>
          <td className={classes.text}>{revenue.Dollar}</td>
        
          <td className={classes.text}>{revenue.Naira}</td>
        
          <td className={classes.text}>{revenue.Payout2}</td>
        
          <td className={classes.text}>{revenue.Nrevenue}</td>
        
          <td className={classes.text}>{revenue.Drevenue}</td>
        <td>
          <AiOutlineEye className={classes.icon4} />
        </td>
        
      </tr>)}
    </tbody>
  );
};

export default RevenueLogItem;
