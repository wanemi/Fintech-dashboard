import React from "react";
import search from "../components/Icons/search.png";
import classes from "./SearchBar.module.css";


const SearchBar = () => {
    return (
        <div>
            <form action="#" className={classes.search}>
                <button className={classes.button}>
                    <img alt="" src={search} className={classes.icon} />
                </button>
                <input type="text" className={classes.input} placeholder="Search" />
           </form>
        </div>
    )
}

export default SearchBar;