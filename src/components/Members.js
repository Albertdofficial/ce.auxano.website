import React from "react";
import { useFetch } from "../hooks/useFetch";

import { Link } from "react-router-dom";
import "../styles.css";

export default function Members({membersData}) {
  // const [membersData, error, isPending] = useFetch();


  return (
    <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {membersData &&
        membersData.map((member) => (
          <div key={member.id} className="card ">
            <div className="top">
              <h2 className="name pl-4">
                {" "}
                {`${member.title} ${member.firstName}`}{" "}
              </h2>
            </div>

            <div className="bottom pt-2">
              <p> {member.phoneNumber}</p>
              <p>{member.email} </p>
            </div>

            <Link to={`memberdetails/${member.id}`}>read more...</Link>
            {/* {error && <p className="error"> {error} </p>}
            {isPending && <p className="isPending">Loading... </p>} */}
          </div>
        ))}
    </div>
  );
}
