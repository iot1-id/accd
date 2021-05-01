import React from 'react'

export default function Topnav() {
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
                {topNavOptions.length !== 0
                  ? topNavOptions.map((navOption, index) => (
                      <li
                        className={classes.add_operation}
                        key={index}
                        onClick={() => redirect(navigateTo[index])}
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
                    <img src={userIcon} alt="User Icon" />
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className={classes.spacer}>&nbsp;</div>
      </div>
    );
}
