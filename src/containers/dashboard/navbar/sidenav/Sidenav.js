import React from 'react'
import classes from './sidenav.module.css'
import logo from "./logo.png"


const Sidenav = (props) => {
     const redirect = (path) => {
    props.history.push({ pathname: path });


  };

  const logoutHandler= () =>{

  }

    return (
      <div>
        <div className={classes.side_nav}>
          <div className={classes.home}>
            <div onClick={() => redirect("/")} className={classes.logo}>
              <img src={logo} alt="Accreditation" style={{width:"150px"}}/>
            </div>
          </div>
          <nav>
            <ul className={classes.side_list}>
              <li onClick={() => redirect("/")}>
                 {/* <i className="material-icons">home</i>  */}
              <span>New Requests</span>
            </li>
            {/* <li onClick={() => redirect("/agents")}>
              <span>Verify Users</span>
            </li> */}
            <li onClick={() => redirect("/operation")}>
              <span>Verify Certifiers</span>
            </li>

            <li onClick={() => redirect("/profile")}>
              <span>Pending recipients</span>
            </li>
            <li onClick={() => redirect("/settings")}>
               {/* <i className="material-icons">toggle_on</i>  */}
                <span>Completed recipients</span>
              </li>
              {/* <li onClick={logoutHandler}>
                <span>Logout</span>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    );
}
export default Sidenav;
