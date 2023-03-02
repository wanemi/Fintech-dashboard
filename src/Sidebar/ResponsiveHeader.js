import React, { useState } from "react";
import { Fragment } from "react";
import classes from "./ResponsiveHeader.module.css";
import { Link } from "react-router-dom";
import Aside from "./Aside";
import BackDrop from "./BackDrop";
import { GiHamburgerMenu } from "react-icons/gi";
import close from "../components/Icons/close.png";

const ResponsiveHeader = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevshowMenu) => !prevshowMenu);
  };

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <Aside>
          <nav className={classes.drawer}>
            <ul className={classes.links}>
              <li onClick={closeDrawer}>
                <Link to="/">Dashboard</Link>
              </li>
                <Fragment>
                  <li onClick={closeDrawer}>
                    <Link to="/setting">Site Settings</Link>
                  </li>
                  <li onClick={closeDrawer}>
                    <Link to="/payout">PayOuts</Link>
                  </li>
                  <li onClick={closeDrawer}>
                    <Link to="/transaction">Transactions</Link>
                  </li>
                  <li onClick={closeDrawer}>
                    <Link to="/cashchange">Cash Change Logs</Link>
                  </li>
                  <li onClick={closeDrawer}>
                    <Link to="/customers">Customers</Link>
                  </li>
                  <li onClick={closeDrawer}>
                    <Link to="/users">Users</Link>
                  </li>
                  <li onClick={closeDrawer}>
                    <Link to="/percentlog">Percentage Logins</Link>
                  </li>
                  <li onClick={closeDrawer}>
                    <Link to="/permission">Permission</Link>
                  </li>
                </Fragment>
            </ul>
          </nav>
        </Aside>
      )}
      <header className={classes.mainheader}>
        <div className={classes.ricon} onClick={openDrawer}>
          <GiHamburgerMenu />
        </div>
        <div className={classes.th}>
          <Link to="/">Thesaurus</Link>
        </div>
      </header>
    </Fragment>
  );
};

export default ResponsiveHeader;
