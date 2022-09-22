import React from 'react';
import BarLoader from './BarLoader';
import loader from './MainLoader.module.css';

const MainLoader = () => {

    return (
        <div className={loader.mainLoader}>

            <div className={loader.loaderContainer}> <BarLoader />   </div>    

        </div>
     
    )
}

export default MainLoader;