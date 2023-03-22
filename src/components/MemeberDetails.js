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


  return (
    <div className="member-details">
      {error && <p>{error} </p>}
      {isPending && <div>Loading...</div>}
      {person && (
        <p>
          Full name:{" "}
          {`${person.title} ${person.firstName} ${person.middleName?person.middleName:''} ${person.lastName} `}{" "}
        </p>
      )}
      {person?.phoneNumber && <p>Phone: {person.phoneNumber} </p>}
      {person?.email && <p>Email: {person.email} </p>}
      {person?.birthDate && <p>Birth date: {person.birthDate} </p>}
      {person?.date && <p>Date joined {person.date} </p>}
      {person?.invitedBy && <p>Invited By: {person.invitedBy} </p>}
      {person?.address && <p>Address: {person.address} </p>}
      {person?.hasDoneWaterBaptism && <p>Has done water baptism: {person.hasDoneWaterBaptism} </p>}
      {person?.salvation && <p>Born again: {person.salvation} </p>}
      {person?.prayerPoint && <p>Prayer requests: {person.prayerPoint} </p>}
    </div>
  );
}
