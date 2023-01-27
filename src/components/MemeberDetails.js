import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

import "./MemberDetails.css";

export default function MemberDetails({ data }) {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  //console.log(id);

  // get a document from firebase
  useEffect(() => {
    setIsPending(true);
    try {
      projectFirestore
        .collection("member")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setPerson(doc.data());
          } else {
            throw new Error("Page not found");
          }
          setIsPending(false);
        });
    } catch (err) {
      setIsPending(false);
      setError("Page not Found");
      console.log(err.message);
    }
  }, [id]);

  console.log(person);

  return (
    <div className="member-details">
      {error && <p>{error} </p>}
      {isPending && <div>Loading...</div>}
      {person && (
        <p>
          Full name:{" "}
          {`${person.title} ${person.firstName} ${person.middleName} ${person.lastName} `}{" "}
        </p>
      )}
      {person && <p>Phone {person.phoneNumber} </p>}
      {person && <p>Email: {person.email} </p>}
      {person && <p>Birth date: {person.birthDate} </p>}
      {person && <p>Date joined {person.date} </p>}
      {person && <p>Invited By: {person.invitedBy} </p>}
      {person && <p>Address: {person.address} </p>}
      {person && <p>Has done water baptism: {person.hasDoneWaterBaptism} </p>}
      {person && <p>Prayer requests: {person.prayerPoint} </p>}
    </div>
  );
}
