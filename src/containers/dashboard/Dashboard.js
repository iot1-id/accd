import React from "react";
import TopNav from "./navbar/topnav/Topnav";
import classes from "./dashboard.module.css";
import Sidenav from "./navbar/sidenav/Sidenav";

const Dashboard = (props) => {
  return (
    <div>
      <Sidenav />
      <div className={classes.content}>
        <TopNav
          title={props.title}
          button={props.button}
          topNavOptions={props.topNavOptions}
          navigateTo={props.navigateTo}
        />
        <div>{props.children}</div>
        {/* <ContentDetails /> */}
      </div>
    </div>
  );
};
export default Dashboard;
