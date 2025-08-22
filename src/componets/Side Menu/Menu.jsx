import React, { useEffect, useState } from "react";
import "./Menu.css";
import ToggleSwitch from "../Header/ToggleSwitch.jsx";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll lock handler
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // reset scroll
    }
  }, [isOpen]);

  return (
    <div className="menu-grid">
      {/* Controlled checkbox */}
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />

      <label htmlFor="menu-toggle" className="menu-icon">
        <div className="menu">
          <span></span>
        </div>
      </label>

      {/* Side Menu */}
      <div className="menu_content">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <img className="mobile_logo" src="/images/logo.png" alt="logo" />
      <ToggleSwitch id="mobileMode" />
    </div>
  );
}
