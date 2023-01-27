import React, { useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";
import { useHistory } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
  const [isPending, setIsPending] = useState(false);
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");
  const title = useRef("");
  const birthDate = useRef("");
  const phoneNumber = useRef("");
  const whatsApp = useRef("");
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
  const salvation = useRef("");
  const department = useRef("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const doc = {
      title: title.current.value,
      firstName: firstName.current.value,
      middleName: middleName.current.value,
      lastName: lastName.current.value,
      birthDate: birthDate.current.value,
      phoneNumber: phoneNumber.current.value,
      whatsApp: whatsApp.current.value,
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
      salvation: salvation.current.value,
      department: department.current.value,
    };

    //add a document to a firebase document
    try {
      await projectFirestore.collection("member").add(doc);
    } catch (err) {
      console.log(err);
      setIsPending(false);
    }
    history.push("/members");
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
            <span>Birth date (day/month/year) </span>
            <input
              placeholder="1/1/2000"
              type="text"
              ref={birthDate}
              required
            />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Telephone number (Direct call)</span>
            <input type="text" ref={phoneNumber} />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>WhatsApp Num (Ignore if same as above)</span>
            <input type="text" ref={whatsApp} />
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
            <span>Today's Date (day/month/year)</span>
            <input type="text" ref={date} />
          </label>
        </div>

        <div className="member-detail">
          <label>
            <span>Did you pray the prayer of salvation today?</span>
            <input type="text" ref={salvation} placeholder="yes/no" />
          </label>
        </div>
        <div className="member-detail">
          <label>
            <span>Have you done water Baptism? </span>
            <input placeholder="yes/no" type="text" ref={hasDoneWaterBaptism} />
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
            <span>Which department would you love to join?</span>
            <select ref={department}>
              <option value="Choir">Choir</option>
              <option value="Ushering">Ushering</option>
              <option value="Media">Media</option>
              <option value="Follow up Team">Follow up Team</option>
              <option value="Welfare">Welfare</option>
              <option value="Venue Management">Venue Management</option>
              <option value="Instrumentalist">Instrumentalist</option>
              <option value="other">Other</option>
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
            <span>Enter the cell name of who invited you</span>
            <input type="text" ref={cell} />
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

        <button disabled={isPending} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
