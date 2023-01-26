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

import "./App.css";
import Birthday from "./Birthday";
import FirstTimers from "./components/FirstTimers";
import Report from "./components/Report";

export default function App() {
  const [data, setData] = useState(null);
  let membersData = [];
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

  // removing dubplicates
  if (data) {
    const key = "firstName";
    membersData = [
      ...new Map(data.map((member) => [member[key], member])).values(),
    ];
  }

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
            <Members/>
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
