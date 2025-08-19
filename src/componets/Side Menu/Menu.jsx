import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      {/* Hidden Checkbox */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />

      {/* Hamburger Icon */}
      <label htmlFor="menu-toggle" className="menu-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
          <line x1="1.5" y1="2.5" x2="22.5" y2="2.5" stroke="#6C7072" strokeWidth="3" strokeLinecap="round" />
          <line x1="4.5" y1="10.5" x2="22.5" y2="10.5" stroke="#6C7072" strokeWidth="3" strokeLinecap="round" />
          <line x1="18.5" y1="18.5" x2="22.5" y2="18.5" stroke="#6C7072" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </label>

      {/* Side Menu */}
      <div className="menu_content">
        <h3>My Side Menu</h3>
        <p>Menu item 1</p>
        <p>Menu item 2</p>
        <p>Menu item 3</p>
      </div>
    </div>
  );
}
