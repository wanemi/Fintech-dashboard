import React from "react";
import Total from "./Total";
import Daily from "./Daily";
import classes from "./Result.module.css";

const Result = () => {
    return (
        <div className={classes.result}>
            <div className={classes.container1}>
                <Total />
                <Daily />
            </div>
            <div></div>
        </div>
    )
};

export default Result;