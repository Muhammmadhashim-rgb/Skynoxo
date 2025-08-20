import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      {/* Hidden Checkbox */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />

      {/* Hamburger Icon */}
      <label htmlFor="menu-toggle" className="menu-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 40 40" fill="none">
      
          <line x1="2" y1="5" x2="35" y2="5" stroke="#742BEC" stroke-width="5" stroke-linecap="round" />

          
          <line x1="5" y1="15" x2="35" y2="15" stroke="#742BEC" stroke-width="5" stroke-linecap="round" />

          
          <line x1="10" y1="25" x2="35" y2="25" stroke="#742BEC" stroke-width="5" stroke-linecap="round" />
        </svg>

      </label>

      {/* Side Menu */}
      <div className="menu_content">
        
      </div>
    </div>
  );
}
