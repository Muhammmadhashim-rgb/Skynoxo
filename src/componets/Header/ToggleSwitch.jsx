import React, { useState } from 'react';
import './ToggleSwitch.css'; // ✅ import your CSS file

function ToggleSwitch() {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn(!on);
    document.body.style.backgroundColor = !on ? '#ffffff' :  '#060C1A'; 
  };

  return (
    <div className="toggle-switch">
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider"> <img src="/images/half_moon.sv" alt="" /></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
