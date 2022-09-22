import React, { useState } from "react";
import classes from "./Settings.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import SettingsFooter from "./SettingsFooter";
import SettingsHeader from "./SettingsHeader";
import SettingsItem from "./SettingsItem";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const settings = [
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },

    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
    {
      id: "01",
      FlatFee: "$1",
      charges: "N150",
      percent: "13.00%",
    },
    {
      id: "02",
      FlatFee: "$2",
      charges: "N150",
      percent: "15.00%",
    },
  ];

  const [TotalPages] = useState(Math.ceil(settings.length / 10));

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = settings.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  return (
    <div className={classes.setting}>
      <div className={classes.container}>
        <h1 className={classes.header}>Site Settings</h1>
        <SearchBar />
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <SettingsHeader />
            <SettingsItem settings={currentPosts} />
            <SettingsFooter
              goToNextPage={goToNextPage}
              goToPreviousPage={goToPreviousPage}
              TotalPages={TotalPages}
              currentPage={currentPage}
            />
          </div>
        </table>
      </div>
    </div>
  );
};

export default Settings;
