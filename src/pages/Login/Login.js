import React, { useState } from 'react';
//import MainLoader from '../../loaders/MainLoader';
//import authRequest from '../../logics/authRequest';
//import classes from "./Login.module.css";


const Login = (props) => {

    const [body, setBody] = useState({ email: '', password: ''})
    const [loading, setLoading] = useState(false)

    return(
        <div>
            <form className={classes.form}>

                <input type="email" />
                <input type="password"   />
                <button> Login </button>

            </form>

        </div>
    )
}

export default Login