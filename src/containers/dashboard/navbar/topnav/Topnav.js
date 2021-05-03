import React from "react";
import classes from "./topnav.module.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Topnav = (props) => {
  const redirect = (path) => {
    props.history.push({ pathname: path });
  };

  console.log(props);

  return (
    <div>
      <div className={classes.top_nav}>
        <div>
          <ul className={classes.nav_list}>
            <div className={classes.search_bar}>
              <span style={{ margin: 0 }}>{props.title}</span>
            </div>
            <div className={classes.nav_items}>
              {/* <li>{props.button}</li> */}
              {props.topNavOptions.length !== 0
                ? props.topNavOptions.map((navOption, index) => (
                    <li
                      className={classes.add_operation}
                      key={index}
                      onClick={() => redirect(props.navigateTo[navOption])}
                    >
                      {navOption}
                    </li>
                  ))
                : ""}
              <div className={classes.user_icon_up}>
                <div
                  className={classes.user_icon}
                  // onClick={(e) => toggleDropDown(e)}
                >
                  <ExitToAppIcon/>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className={classes.spacer}>&nbsp;</div>
    </div>
  );
};
export default Topnav;
