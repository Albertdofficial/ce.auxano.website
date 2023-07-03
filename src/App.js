import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Members from "./pages/Members";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import About from "./pages/About";
import MemberDetails from "./components/MemeberDetails";
import Search from "./pages/Search";

import "./App.css";
import Birthday from "./pages/Birthday";
import FirstTimers from "./pages/FirstTimers";
import Report from "./pages/Report";
import { useFetch } from "./hooks/useFetch";

export default function App() {
  const {membersData } = useFetch();

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/birthdays">
            <Birthday data={membersData} />
          </Route>
          <Route path="/firsttimers">
            <FirstTimers data={membersData} />
          </Route>
          <Route path="/report">
            <Report data={membersData} />
          </Route>
          <Route path="/members">
            <Members membersData={membersData} />
          </Route>
          <Route path="/search">
            <Search data={membersData} />
          </Route>
          <Route path="/memberdetails/:id">
            <MemberDetails data={membersData} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
