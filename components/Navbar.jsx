import React from "react";
import { BellIcon, CogIcon, UserCircleIcon } from "@heroicons/react/outline";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Impossible List</h1>
        <div className="navbar-icons">
          <BellIcon className="navbar-icon" />
          <CogIcon className="navbar-icon" />
          <UserCircleIcon className="navbar-icon" />
        </div>
      </div>
    </nav>
  );
}
