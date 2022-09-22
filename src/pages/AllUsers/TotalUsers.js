import React from "react";
import MonthlyUsers from "./MonthlyUsers";
import DailyUsers from "./DailyUsers";
import classes from "./TotalUsers.module.css";

const TotalUsers = () => {


    return (
        <div className={classes.total}>
            <div className={classes.container1}>
                <MonthlyUsers />
                <DailyUsers />
            </div>
            <div></div>
        </div>
    )
};

export default TotalUsers;