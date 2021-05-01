// import logo from './logo.svg';
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Main />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
