import React from 'react';
import classes from './SpinnerLoader.module.css';

const SpinnerLoader = () => {

    return (
        <div className={classes.loaderContainer}>
            <div className={classes.spinner}>
                <div></div><div></div><div></div>
                <div></div><div></div><div></div>
                <div></div><div></div><div></div>
                <div></div><div></div><div></div>
            </div>
        </div>
        )
};

export default SpinnerLoader