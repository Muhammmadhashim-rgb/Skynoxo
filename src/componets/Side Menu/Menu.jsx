import React, { useEffect, useState } from "react";
import "./Menu.css";
import ToggleSwitch from "../Header/ToggleSwitch.jsx";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll lock handler
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
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
        <div className="menu_icons">
          <img className='icon_menu' src="/images/header icon 1.svg" alt="header icon 1" />
          <img className='icon_menu' src="/images/header icon 2.svg" alt="header icon 2" />
          <img className='icon_menu' src="/images/header icon 3.svg" alt="header icon 3" />
          <img className='icon_menu' src="/images/header icon 4.svg" alt="header icon 4" />
          <img className='icon_menu' src="/images/header icon 5.svg" alt="header icon 5" />
        </div>
        <img className='menu_arrow_right' src="/images/header icon 6.svg" alt="" />
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
