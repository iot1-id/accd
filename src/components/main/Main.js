import { Route, Switch, withRouter } from "react-router-dom";
import React, { useEffect } from "react";
// import { connect } from "react-redux";
import LandingPage from "../../containers/landingPage/LandingPage";
import Homepage from "../../containers/userHomepage/homepage";
import AdminHomepage from "../../containers/adminHomepage/AdminHomepage";
import CertHomepage from "../../containers/certifierHomePage/CertHomepage";
import Login from "../../containers/auth/login/login";
import Signup from "../../containers/auth/signup/signup";
import ForgotPassword from "../../containers/auth/forgotPassword/ForgotPassword";
import { AuthProvider } from "../../components/contexts/AuthContext";
import { Container } from "react-bootstrap";
import SignUp from "../../containers/auth/signup/Signup1";
import SignIn from "../../containers/auth/login/login1";

const Main = (props) => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/user">
          <Homepage />
        </Route>
        <Route path="/admin">
          <AdminHomepage />
        </Route>
        <Route path="/certifier">
          <CertHomepage />
        </Route>

        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />

        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </AuthProvider>
  );
};

export default withRouter(Main);
