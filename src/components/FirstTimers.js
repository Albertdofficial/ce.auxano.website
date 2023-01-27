import React, { useState, useEffect } from "react";
import { months } from "../Months";

// import css
import "./FirstTimers.css";

const FirstTimers = ({ data }) => {
  const [firstTimers, setFirstTimers] = useState([]);
  const[currentMonthName, setCurrentMonthName] = useState('');
  let currentMonth = new Date().getMonth() + 1;


  useEffect(() => {
    let dateJoined, phone, name, month, prayerPoint;
    const results = [];

    months.forEach((_month) => {
      if (_month.id === currentMonth) {
        setCurrentMonthName(_month.m);
      }
    });

    data &&
      data.forEach((member) => {
        if (member.date) {
          dateJoined = member.date;
          month = Number(dateJoined.split("/").slice(1, 2).at(0));

          if (month === currentMonth) {
            name = `${member.firstName}  ${member.middleName} ${member.lastName}`;
            phone = member.phoneNumber;
            prayerPoint = member.prayerPoint;
            results.push({ name, phone, prayerPoint });
          }
        }
      });
    setFirstTimers(results);
  }, [data, currentMonth]);

  return (
    <div className="birthday ">
      <h1>First Timers for {currentMonthName} </h1>
      <div className="first-timers"  >
        {firstTimers &&
          firstTimers.map((firsttimer) => (
            <div key={Math.random() * 1000000} className="first__timer">
              <p>{firsttimer.name} </p>
              <p>{firsttimer.phone} </p>
              {/* <p>{firsttimer.prayerPoint.split(' ').slice(0,9).join(' ')} </p> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirstTimers;
