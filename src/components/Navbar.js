import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const menu = useRef();

  const handleClick = () => {
    menu.current.classList.toggle("hidden");
  };

  return (
    <div className="navbar">
      <nav className="md:flex justify-between ">
        <ul>
          <Link to="/" className="brand">
            <h2 className="pl-4 text-2xl text-orange-700">Christ Embassy Auxano</h2>
          </Link>
        </ul>

        <div className="px-4 cursor-pointer md:hidden" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* <SearchBar /> */}
        <ul className="menu text-2xl hidden md:flex" ref={menu}>
          <li className="px-2">
            <Link to="/report">report</Link>
          </li>
          <li className="px-2">
            <Link to="/members">members</Link>
          </li>
          <li className="px-2">
            <Link to="/signup">signup</Link>
          </li>
          <li className="px-2">
            <Link to="/firsttimers">firsttimers</Link>
          </li>
          <li className="px-2">
            <Link to="/birthdays">birthdays</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// if (menu.classList.contains("hidden")) {
//       menu.classList.remove("hidden");
//     } else {
//       menu.classList.add("hidden");
//     }