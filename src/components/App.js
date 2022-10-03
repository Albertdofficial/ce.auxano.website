import React from "react";

import { projectFirestore } from "./config";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Members from './Members'
import Navbar from "./Navbar";
import Signup from "./Signup";
import About from "./About";
import MemberDetails from "./MemeberDetails";

import "../App.css";
import Birthday from "../Birthday";
import FirstTimers from "./FirstTimers";
import Report from "./Report";

export default function App() {
  const [data, setData] = useState(null);
  // const [error, setError] = useState('')

  // get data from firebase
  useEffect(() => {
    const unsub = projectFirestore.collection("member").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          console.log("No recipes to load");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
        }
      },
      (err) => {
        console.log(err.message);
      }
    );

    return () => unsub();
  }, []);

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
            <Birthday data={data} />
          </Route>
          <Route path="/firsttimers">
            <FirstTimers data={data} />
          </Route>
          <Route path="/report">
            <Report data={data} />
          </Route>
          <Route path="/members">
            <Members data={data} />
          </Route>
          <Route path="/memberdetails/:id">
            <MemberDetails data={data} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
