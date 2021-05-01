import { Route, Switch, withRouter } from "react-router-dom";
import React, { useEffect } from "react";
// import { connect } from "react-redux";
import LandingPage from "../../containers/landingPage/LandingPage";
import Homepage from "../../containers/userHomepage/homepage";

const Main = (props) => {
  return (
    <Switch>
      <Route path="/userhomepage"><Homepage/></Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

export default withRouter(Main);
