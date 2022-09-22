import React from "react";
import classes from "./Header.module.css";
import { HiOutlineFilter } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = () => {
    return (
        <div className={classes.container}>
            
                <div className={classes.box}>
                    <div className={classes.icon1}/>
                    <RiArrowDropDownLine className={classes.icon4}/>
                </div>
                <div className={classes.icons}>
                    <HiOutlineFilter className={classes.icon2} />
                    <RiArrowDropDownLine className={classes.icon3} />
                </div>
            
        </div>
    )
}

export default Header;