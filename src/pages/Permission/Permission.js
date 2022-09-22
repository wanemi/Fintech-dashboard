import React, { useState } from "react";
import classes from "./Permission.module.css";
import SearchBar from "../../UI/SearchBar";
import Header from "../../UI/Header";
import PermissionHeader from "./PermissionHeader";
import PermissionItem from "./PermissionItem";
import PermissionFooter from "./PermissionFooter";

const Permission = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const Role = [
    {
      id: "30",
      Guard: "Web",
      Name: "access control",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
    {
      id: "29",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
    {
      id: "28",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
    {
      id: "27",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
    {
      id: "26",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
    {
      id: "25",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
    {
      id: "24",
      Guard: "Web",
      Name: "access control ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
    {
      id: "23",
      Guard: "Web",
      Name: "access control ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },

    {
      id: "25",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },

    {
      id: "25",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },

    {
      id: "25",
      Guard: "Web",
      Name: "message_template_delete ",
      Created: "2020-10-08 11:59:11am",
      Updated: "2020-10-08 11:59:11am",
      Roles: "View",
    },
  ];

  const [TotalPages] = useState(Math.ceil(Role.length / 10));
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Role.slice(indexOfFirstPost, indexOfLastPost);

  function goToNextPage() {
    setCurrentPage((page) => currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => currentPage - 1);
  }
  return (
    <div>
      <h1 className={classes.header}>Permissions</h1>
      <div className={classes.rate}>
        <SearchBar />
        <button className={classes.ratebtn}>
          <span className={classes.text}>Create Admin</span>
        </button>
      </div>
      <Header />
      <div className={classes.ta}>
        <table>
          <div className={classes.ta}>
            <PermissionHeader />
            <PermissionItem Role={currentPosts} />
            <PermissionFooter
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

export default Permission;
