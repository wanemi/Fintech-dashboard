import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <div>
                <div className={classes.link}>
                    <NavLink to={props.Link} activeClassName={classes.active} className={classes.side}>
                        <img alt="" src={props.src} className={classes.icon} />
                        <span className={classes.text}>{props.text}</span>
                    </NavLink>
                </div>
        </div>
    )
}

export default NavBar;