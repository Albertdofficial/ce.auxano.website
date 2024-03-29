import React from "react";
import { useEffect, useState } from "react";
import { months } from "../Months";

// styles
import "./Birthday.css";

export default function Birthday({ data }) {
  const [celebrants, setCelebrants] = useState([]);
  let currentMonth = new Date().getMonth() + 1;
  let currentMonthName;

  months.forEach((month) => {
    if (month.id === currentMonth) {
      currentMonthName = month.m;
    }
  });

  useEffect(() => {
    let str,
      birthdate,
      name = "";
    let month;
    let results = [];

    data &&
      data.forEach((member) => {
        str = member.birthDate;
        month = Number(str.split("/").slice(1, 2).at(0));
        if (month === currentMonth) {
          name = `${member.firstName} ${member.middleName?member.middleName:''} ${member.lastName} `;
          birthdate = member.birthDate;
          results.push({ name, birthdate });
        }
      });
    setCelebrants(results);
  }, [data, currentMonth]);

  return (
    <div className="birthday">
      <h1>Birthday celebrants for {currentMonthName} </h1>
      <div className="celebrants">
        {celebrants &&
          celebrants.map((cele) => (
            <div key={Math.random() * 1000000} className="celebrant">
              <p>{cele.name} </p>
              <p>{cele.birthdate} </p>
            </div>
          ))}
      </div>
    </div>
  );
}
