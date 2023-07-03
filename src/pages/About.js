import React from "react";

import "./About.css";

const homePage = () => {
  return (
    <div className="home-page">
      <div className="vision">
        <h1>Our Vision</h1>
        <p className="vision-text">
          {" "}
          To take the divine presence of God to the nations and peoples of the
          world and demonstrate the character of the spirit.
        </p>
      </div>
      <div className="mission">
        <h1>Our Mission</h1>
        <p className="mission-text">
          To raise generations of men and women who will come into their
          inheritance to fulfill God’s dream.
        </p>
      </div>
      <div className="purpose">
      <h1>Our Purpose</h1>
        <p className="purpose-text">
          To make known and bring men into their inheritance.
        </p>
      </div>
    </div>
  );
};

export default homePage;
