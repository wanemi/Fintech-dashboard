import React from 'react';
import classes from "./Aside.module.css";

const Aside = props => {
   return (
    <aside className={classes.side}>{props.children}</aside>
   )
};

export default Aside;