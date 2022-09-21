import React, { useRef } from "react";
import { projectFirestore } from "./config";
import { useHistory } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");
  const title = useRef("");
  const birthDate = useRef("");
  const phoneNumber = useRef("");
  const email = useRef("");
  const date = useRef("");
  const invitedBy = useRef("");
  const cell = useRef("");
  const address = useRef("");
  const hasDoneWaterBaptism = useRef("");
  const prayerPoint = useRef("");
  const find = useRef("");
  const maritalStatus = useRef("");
  const occupation = useRef("");
  const workAddress = useRef("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title: title.current.value,
      firstName: firstName.current.value,
      middleName: middleName.current.value,
      lastName: lastName.current.value,
      birthDate: birthDate.current.value,
      phoneNumber: phoneNumber.current.value,
      email: email.current.value,
      date: date.current.value,
      invitedBy: invitedBy.current.value,
      cell: cell.current.value,
      address: address.current.value,
      hasDoneWaterBaptism: hasDoneWaterBaptism.current.value,
      prayerPoint: prayerPoint.current.value,
      find: find.current.value,
      maritalStatus: maritalStatus.current.value,
      occupation: occupation.current.value,
      workAddress: workAddress.current.value,
    };
    console.log(doc);

    //add a document to a firebase document
    try {
      await projectFirestore.collection("member").add(doc);
    } catch (err) {
      console.log(err);
    }

    // resetForm();

    history.push("/members");
  };

  const resetForm = () => {
    title.current.value = "";
    firstName.current.value = "";
    middleName.current.value = "";
    lastName.current.value = "";
    birthDate.current.value = "";
    phoneNumber.current.value = "";
    email.current.value = "";
    date.current.value = "";
    invitedBy.current.value = "";
    cell.current.value = "";
    address.current.value = "";
    hasDoneWaterBaptism.current.value = "";
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <div className="member-detail">
          <label>
            <span>Title</span>
            <input type="text" ref={title} placeholder="Brother/Sister" />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>First name</span>
            <input type="text" ref={firstName} required />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Middle name</span>
            <input type="text" ref={middleName} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Last name</span>
            <input type="text" ref={lastName} required />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Marital Status</span>
            <input
              type="text"
              ref={maritalStatus}
              placeholder="single/married"
            />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Birth date</span>
            <input
              placeholder="day/month/year"
              type="text"
              ref={birthDate}
              required
            />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Home address </span>
            <input type="text" ref={address} />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Occupation</span>
            <input type="text" ref={occupation} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Work/Business/School Address</span>
            <input type="text" ref={workAddress} />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Telephone number</span>
            <input type="text" ref={phoneNumber} required placeholder="+90 533 444 5555" />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>WhatsApp Num (Ignore if same as above)</span>
            <input type="text" ref={phoneNumber} placeholder="+90 533 123 4567" />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Email Address</span>
            <input type="email" ref={email} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Today's Date</span>
            <input placeholder="day/month/year" type="text" ref={date} />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Enter the cell name of who invited you</span>
            <input type="text" ref={cell} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Have you done water Baptism? </span>
            <input
              placeholder="yes/no"
              type="text"
              ref={hasDoneWaterBaptism}
              required
            />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>How did you find out about Christ Embassy </span>
            <select ref={find}>
              <option value="INVITATION">INVITATION</option>
              <option value="TV">TV</option>
              <option value="YOUR LOVEWORLD">YOUR LOVEWORLD</option>
              <option value="PRAISE NIGHT">PRAISE NIGHT</option>
              <option value="HEALING STREAMS">HEALING STREAMS</option>
              <option value="OTHER">OTHER</option>
            </select>
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Who invited you?</span>
            <input type="text" ref={invitedBy} />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Prayer Request</span>
            <textarea
              type="text"
              ref={prayerPoint}
              cols="34"
              rows="3"
            ></textarea>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
