import React, { useState, useEffect } from "react";
import classes from "./Rate.module.css";
import RateItem from "./RateItem";
import RateHeader from "./RateHeader";
//import MainLoader from "../../loaders/MainLoader";
//import authRequest from "../../logics/authRequest";

const Rate = () => {
  const [data, setData] = useState(null);
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);

  const [edit, setEdit] = useState();
  const [edited, setEdited] = useState();

  return (
    <div className={classes.container}>
      <div className={classes.headertxt}>
        <h1 className={classes.header}>Rates</h1>
      </div>

      <div>
        <button> USD </button>
        <button> NGN </button>
        <button> CNY </button>
        <button> GHS </button>
        <button> EUR </button>
        <button> GBP </button>
        <button> CAD </button>
        <button> ZAR </button>
      </div>

      <div className={classes.heading}> Converting From {currency} </div>

      <table>
        <RateHeader />
        <RateItem
        />
      </table>

      <button>Save Changes</button>
    </div>
  );
};

export default Rate;
