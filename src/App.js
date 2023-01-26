import React from "react";

import { projectFirestore } from "./components/config";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import About from "./components/About";
import MemberDetails from "./components/MemeberDetails";
import Search from './components/Search'

import "./App.css";
import Birthday from "./Birthday";
import FirstTimers from "./components/FirstTimers";
import Report from "./components/Report";
import { useFetch } from "./hooks/useFetch";

export default function App() {
  const [membersData ] = useFetch()

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
            <Members/>
          </Route>
          <Route path="/search">
            <Search  data={membersData} />
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
