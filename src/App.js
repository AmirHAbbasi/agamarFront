import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Empty from "./components/empty";
import signUp from "./components/signUp";
import profileDashboard from "./components/profileDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"></li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/ثبت_نام"}>
                    ثبت نام
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Empty} />
              <Route path="/ثبت_نام" component={profileDashboard} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
