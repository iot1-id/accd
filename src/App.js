// import logo from './logo.svg';
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/contexts/AuthContext";
import Signup from "./containers/auth/signup/signup";
import Login from "./containers/auth/login/login";
import ForgotPassword from "./containers/auth/forgotPassword/ForgotPassword";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <AuthProvider>
          <Switch>
           
          </Switch>
        </AuthProvider> */}
        <Layout>
          <Main />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
