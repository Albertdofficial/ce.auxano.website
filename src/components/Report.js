import React, { useRef, useState, useEffect } from "react";
import { months } from "../Months";

import "./Report.css";

const Report = ({ data }) => {
  const [initialMonth, setInitialMonth] = useState(null);
  const [initialMonthName, setInitialMonthName] = useState(null);
  const month = useRef("");
  const [firstTimersData, setFirstTimersData] = useState();
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    months.forEach((_month) => {
      if (_month.m.toUpperCase() == month.current.value.toUpperCase()) {
        setInitialMonth(_month.id);
        setInitialMonthName(_month.m);
      }
    });
    resetInput();
  };

  useEffect(() => {
    setShowForm(!showForm);
    let dateJoined, phone, name, month;
    const results = [];

    data &&
      data.forEach((member) => {
        if (member.date) {
          dateJoined = member.date;
          month = Number(dateJoined.split("/").slice(1, 2).at(0));

          if (month >= initialMonth) {
            name = `${member.firstName}  ${member.middleName} ${member.lastName}`;
            phone = member.phoneNumber;
            results.push({ name, phone });
          }
        }
      });
    setFirstTimersData(results);
  }, [initialMonth, data]);

  const resetInput = () => {
    month.current.value = "";
  };
  return (
    <div className="report">
      {showForm && (
        <form onSubmit={handleSubmit} className="report-form">
          <div>
            <label>
              <span>From which month report do you want</span>
              <input type="text" ref={month} />
            </label>
            <button>Submit</button>
          </div>
        </form>
      )}

      {!showForm && firstTimersData && (
        <div className="report-details" >
          <h1>First timers from {initialMonthName} </h1>
          <div className="birthday  report-range">
            {firstTimersData &&
              firstTimersData.map((firsttimer) => (
                <div
                  key={Math.random() * 1000000}
                  className="first-timer"
                >
                  <p>{firsttimer.name} </p>
                  <p>{firsttimer.phone} </p>
                </div>
              ))}
            {!showForm && (
              <button
                className="another__report-btn"
                onClick={() => setShowForm(true)}
              >
                I Want report for another range
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
